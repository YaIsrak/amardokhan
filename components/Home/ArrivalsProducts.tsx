import { getNewArrivalProducts } from "@/lib/fetchData";
import { Product } from "@/types/typing";
import ProductCard from "../Card/ProductCard";

export default async function ArrivalsProducts() {
  const products: Product[] = await getNewArrivalProducts();

  return (
    <>
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
}
