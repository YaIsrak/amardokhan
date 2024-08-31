import ArrivalsProducts from "@/components/Home/ArrivalsProducts";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Header from "@/components/Home/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-4">
      {/* Header */}
      <Header />

      {/* Featured Products */}
      <div className="py-4">
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl font-bold">Featured Products</h1>
          <p className="flex-1 text-sm text-muted-foreground">
            Dont miss our amazing products
          </p>
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href="/shop">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 py-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          <FeaturedProducts />
        </div>
      </div>

      {/* New Arrivals */}
      <div className="py-4">
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl font-bold">New Arrivals</h1>
          <p className="flex-1 text-sm text-muted-foreground">
            Dont miss our amazing products
          </p>
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href="/shop">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 py-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          <ArrivalsProducts />
        </div>
      </div>
    </main>
  );
}
