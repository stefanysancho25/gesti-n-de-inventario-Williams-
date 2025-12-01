"use client";

import React from "react";


export default function Footer() {
    return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Nombre de la empresa */}
        <p className="text-sm">
            © {new Date().getFullYear()} Tecnología de Williams. Todos los derechos reservados.
        </p>

        {/* Enlaces */}
        <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-blue-400">
            Privacidad
            </a>
            <a href="#" className="hover:text-blue-400">
            Términos
            </a>
            <a href="#" className="hover:text-blue-400">
            Contactanos al numero 09843333222
            </a>
        </div>
        </div>
    </footer>
    );
}
