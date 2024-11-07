# Firebase

Firebase is a cloud based platform which provides multiple services, real time database, Firestore and more. It is maintained by google and integrated with the **Google Cloud** to provide cloud services.

## Services

- Real time database (NoSQL database)
- Firestore (document oriented database)
- Authentication
- Hosting
- Storage (file storage and serving)
- Cloud Functions (serverless functions)
- Cloud Messaging (push notifications)
- Analytics (app analytics and tracking)
- Crash Reporting (error reporting)

### Firebase auth setup with React / Next js

**Install firebase SDK:**

```bash
npm install firebase
```

Create a project on firebase dashboard. Create a `firebase.ts` file in the root of the react project.

Add the following code in the file.

```ts
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

export default app
```

Create a `.env` file and add the required variables.
Then create a global context for user auth context.

`AuthContext.tsx`

```tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { FirebaseError } from "firebase/app";

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  console.log("🚀 ~ AuthProvider ~ user:", user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(credentials.user);
    } catch (error) {
      console.error(error);
      if (error instanceof FirebaseError) {
        if (error.code === "auth/user-not-found") console.log("User not found");
        else if (error.code === "auth/wrong-password")
          console.log("Wrong password");
      }
    }
  };

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logOut }}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

```

In a next js application wrap the children in the `layout.tsx` file in `AuthContext` component.

```tsx
 <AuthProvider>{children}</AuthProvider>
```

**Create a Sign Up page:**

```tsx
"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig"; // import initialized Firebase auth
import { FirebaseError } from "firebase/app";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null); // State to store user email

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setUserEmail(null); // Reset the user email state on new submission
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSuccess("User registered successfully!");
      setUserEmail(userCredential.user.email); // Set the email of the signed-up user
    } catch (error) {
      if (error instanceof FirebaseError)
        setError(error.message || "Something went wrong");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="my-12 lg:text-4xl md:text-3xl text-2xl font-semibold">
        Sign Up
      </h2>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col items-center gap-8"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-md text-white bg-transparent border border-gray-700 w-[20rem]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded-md text-white bg-transparent border border-gray-700 w-[20rem]"
        />
        <button
          type="submit"
          className="bg-white text-black rounded-md p-2 cursor-pointer"
        >
          Sign Up
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-teal-500">{success}</p>}

      {/* Display the user's email if registration was successful */}
      {userEmail && (
        <div className="mt-4 p-4 rounded-md bg-gray-800 text-white">
          <p>
            Welcome, <span className="font-semibold">{userEmail}</span>!
          </p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
```

**Create a Sign in page:**

```tsx
"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/components/context/AuthContext";

function Login() {
  const { user, logOut } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Trying to login!");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
    } catch (error) {
      if (error instanceof FirebaseError)
        setError(error?.message || "Something went wrong");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {user?.email}
      {user && (
        <button
          onClick={() => logOut()}
          className="bg-white text-black rounded-md p-2 cursor-pointer"
        >
          Logout
        </button>
      )}
      <h2 className="my-12 lg:text-4xl md:text-3xl text-2xl font-semibold">
        Login
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col items-center gap-8">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-md text-white bg-transparent border border-gray-700 w-[20rem]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded-md text-white bg-transparent border border-gray-700 w-[20rem]"
        />
        <button
          type="submit"
          className="bg-white text-black rounded-md p-2 cursor-pointer"
        >
          Continue
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;

```
