import InventarioTable from "../../components/InventoryTable";
export default function InventoryPage() {
    return (
    <div>
        <h1 className="text-4xl font-bold mb-6">Gestión de Inventarios</h1>
        <p className="mb-4">Aquí puedes ver el stock en tiempo real (demo local).</p>
        <InventarioTable />
    </div>
    );
}
