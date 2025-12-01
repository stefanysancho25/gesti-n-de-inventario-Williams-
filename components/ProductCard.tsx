interface Props {
    name: string;
    price: number;
  discount: number; // 20 o 30
}

export default function ProductCard({ name, price, discount }: Props) {
  const discounted = price - (price * discount) / 100;

    return (
    <div className="p-4 rounded-xl shadow bg-white">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-gray-500 line-through">${price}</p>
        <p className="text-green-600 font-bold">${discounted}</p>
        <span className="text-red-500">-{discount}%</span>
    </div>
);
}
