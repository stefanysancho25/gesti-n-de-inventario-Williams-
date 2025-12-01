// components/DiscountToggle.tsx
"use client";
import { useState } from "react";

export default function DiscountToggle({ onChange }: { onChange: (active: boolean) => void }) {
    const [active, setActive] = useState(false);
    const toggle = () => { setActive(v=>!v); onChange(!active); };

    return (
    <div className="flex gap-2 items-center">
        <button onClick={toggle} className={`px-3 py-1 rounded ${active ? "bg-black text-white" : "bg-gray-200"}`}>
        {active ? "Black Friday ON (20%)" : "Activar Black Friday 20%"}
        </button>
    </div>
);
}

