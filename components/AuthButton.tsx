
// components/AuthButton.tsx
"use client";
import { auth, googleProvider  } from "../lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function AuthButton() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error("Login error", err);
    }
    };

    const handleLogout = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.error("Logout error", err);
    }
    };

    if (user) {
    return (
        <div className="flex items-center gap-2">
        <img src={user.photoURL || "/avatar.png"} alt="avatar" width={32} height={32} className="rounded-full"/>
        <span>{user.displayName}</span>
        <button onClick={handleLogout} className="ml-2 px-3 py-1 rounded bg-gray-200">Salir</button>
        </div>
    );
    }

    return <button onClick={handleLogin} className="px-3 py-1 bg-blue-600 text-white rounded">Iniciar con Google</button>;
}


