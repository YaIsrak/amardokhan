import { getFeaturedProducts } from "@/lib/fetchData";
import { Product } from "@/types/typing";
import ProductCard from "../Card/ProductCard";

export default async function FeaturedProducts() {
  const products: Product[] = await getFeaturedProducts();

  return (
    <>
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
}
