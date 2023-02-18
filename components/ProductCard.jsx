import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [isLoading, setLoading] = useState(true);
  function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Link href={`/produkt/${product.id}`} className="group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={product.images[0].file.url}
          fill
          objectFit="cover"
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className="flex items-center justify-between mt-4 text-base font-medium text-gray-900">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">
        {product.options[0].values[0].name} calories
      </p>
    </Link>
  );
}