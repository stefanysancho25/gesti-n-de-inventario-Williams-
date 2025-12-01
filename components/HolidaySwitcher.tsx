// components/HolidaySwitcher.tsx
"use client";
import { useState, useEffect } from "react";

type Holiday = "none" | "christmas" | "newyear" | "carnival";

export default function HolidaySwitcher() {
    const [holiday, setHoliday] = useState<Holiday>("none");

    useEffect(() => {
    // autoselect by date (ejemplo simple)
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    if (month === 12 && day >= 20) setHoliday("christmas"); // navidad
    else if (month === 12 && day >= 31) setHoliday("newyear"); // fin año
    else if (month === 2) setHoliday("carnival"); // carnaval simplificado
    }, []);

    return (
    <div className={`p-4 rounded ${holiday !== "none" ? "border-2" : ""}`}>
        <label>Decoración:</label>
        <select value={holiday} onChange={(e)=> setHoliday(e.target.value as Holiday)} className="ml-2 p-1 border rounded">
        <option value="none">Normal</option>
        <option value="christmas">Navidad</option>
        <option value="newyear">Fin de Año</option>
        <option value="carnival">Carnaval</option>
        </select>

        <div className="mt-4">
        {holiday === "christmas" && <div className="text-red-600">🎄 Diseño Navidad activo</div>}
        {holiday === "newyear" && <div className="text-yellow-600">🎉 Año Nuevo activo</div>}
        {holiday === "carnival" && <div className="text-pink-600">🎭 Carnaval activo</div>}
        {holiday === "none" && <div>Sin decoración</div>}
        </div>
    </div>
);
}

