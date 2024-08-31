import { getFeaturedProducts } from "@/lib/fetchData";
import { Product } from "@/types/typing";
import ProductCard from "../Card/ProductCard";

export default async function FeaturedProducts() {
  const products: Product[] = await getFeaturedProducts();
  console.log(products[0]);

  return (
    <div className="grid grid-cols-2 py-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
