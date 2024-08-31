import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Header from "@/components/Home/Header";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-4">
      <Header />

      <div className="py-4">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <p className="text-sm text-muted-foreground">
          Dont miss our amazing products
        </p>
        <FeaturedProducts />
      </div>
    </main>
  );
}
