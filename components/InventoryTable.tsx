"use client";
import { useState } from "react";

type Item = { id: string; product: string; stock: number; threshold: number };

export default function InventoryTable() {
    const [items, setItems] = useState<Item[]>([
        { id: "1", product: "Laptop ASUS", stock: 12, threshold: 5 },
        { id: "2", product: "Mouse Gamer", stock: 58, threshold: 10 },
        { id: "3", product: "Monitor LG", stock: 7, threshold: 8 },
    ]);

    const changeStock = (id: string, delta: number) => {
        setItems(prev => prev.map(it => it.id === id ? { ...it, stock: Math.max(0, it.stock + delta) } : it));
    };

    return (
        <div>
            <h2>Inventario</h2>
            <div className="space-y-4">
                {items.map(it => (
                    <div key={it.id} className="p-3 border rounded flex justify-between items-center bg-white">
                        <div>
                            <strong>{it.product}</strong>
                            <div>Stock: {it.stock} {it.stock <= it.threshold && <span className="text-red-600 font-bold"> - REPOSICIÓN</span>}</div>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => changeStock(it.id, 1)} className="px-2 py-1 bg-green-200 rounded">+ Entrada</button>
                            <button onClick={() => changeStock(it.id, -1)} className="px-2 py-1 bg-red-200 rounded">- Salida</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
