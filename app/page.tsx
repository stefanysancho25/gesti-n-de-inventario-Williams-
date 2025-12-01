import PhotoCard from "../components/PhotoCard";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="space-y-10">
      <PhotoCard />

      <h2 className="text-3xl font-bold">Productos Destacados</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard name="Laptop ASUS" price={550} discount={20} />
        <ProductCard name="Mouse Gamer" price={25} discount={30} />
        <ProductCard name="Monitor LG" price={230} discount={20} />
      </div>
    </div>
  );
}
