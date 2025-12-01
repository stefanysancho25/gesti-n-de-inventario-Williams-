// components/NewsletterForm.tsx
"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [ok, setOk] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
        await emailjs.send(serviceID, templateID, { user_email: email }, publicKey);
        setOk("¡Listo! Te llegará correo cuando haya novedades.");
        setEmail("");
    } catch (err) {
        console.error(err);
        setOk("Error al enviar. Intenta luego.");
    }
    };

    return (
    <form onSubmit={handleSubmit} className="flex gap-2">
        <input type="email" required placeholder="tu@correo.com" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded"/>
        <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded">Notificarme</button>
        {ok && <p className="ml-2 text-sm">{ok}</p>}
    </form>
    );
}
