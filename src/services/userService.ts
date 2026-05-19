import { 
  signInWithRedirect, 
  getRedirectResult,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User 
} from 'firebase/auth';
import { auth, googleProvider, db } from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, FieldValue } from 'firebase/firestore';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  xp: number;
  streak: number;
  level: string;
  hearts: number;
  completedLessons: string[];
  premiumStatus: boolean;
  lastActive: FieldValue;
  createdAt: FieldValue;
}

export const authService = {
  async loginWithGoogle() {
    try {
      // Use redirect instead of popup to avoid "popup-blocked" in iframes
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error('Google login error initiation:', error);
      throw error;
    }
  },

  async handleRedirectResult() {
    try {
      const result = await getRedirectResult(auth);
      if (result) {
        await this.ensureUserProfile(result.user);
        return result.user;
      }
      return null;
    } catch (error) {
      console.error('Google redirect result error:', error);
      throw error;
    }
  },

  async loginWithEmail(email: string, pass: string) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, pass);
      return result.user;
    } catch (error) {
      console.error('Email login error:', error);
      throw error;
    }
  },

  async registerWithEmail(email: string, pass: string, name: string) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, pass);
      await this.ensureUserProfile(result.user, name);
      return result.user;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  async logout() {
    await signOut(auth);
  },

  onAuthChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  },

  async ensureUserProfile(user: User, name?: string) {
    const userRef = doc(db, 'users', user.uid);
    try {
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        const profile: UserProfile = {
          uid: user.uid,
          displayName: name || user.displayName || 'Learner',
          email: user.email || '',
          photoURL: user.photoURL || '',
          xp: 0,
          streak: 1,
          level: 'A1',
          hearts: 5,
          completedLessons: [],
          premiumStatus: false,
          lastActive: serverTimestamp(),
          createdAt: serverTimestamp()
        };
        await setDoc(userRef, profile);
      } else {
        await updateDoc(userRef, { lastActive: serverTimestamp() });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
    }
  }
};

export const userService = {
  async getUserProfile(uid: string): Promise<UserProfile | null> {
    const userRef = doc(db, 'users', uid);
    try {
      const snap = await getDoc(userRef);
      return snap.exists() ? (snap.data() as UserProfile) : null;
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, `users/${uid}`);
      return null;
    }
  },

  async updateUserStats(uid: string, stats: Partial<UserProfile>) {
    const userRef = doc(db, 'users', uid);
    try {
      await updateDoc(userRef, {
        ...stats,
        lastActive: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${uid}`);
    }
  }
};
