import ArrivalsProducts from "@/components/Home/ArrivalsProducts";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Header from "@/components/Home/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-4">
      {/* Header */}
      <Header />

      {/* Featured Products */}
      <div className="py-4">
        <div className="flex flex-col items-baseline gap-0 md:flex-row md:gap-2">
          <h1 className="text-2xl font-bold">Featured Products</h1>
          <p className="flex-1 text-sm text-muted-foreground">
            Dont miss our amazing products
          </p>
          <Button
            size={"sm"}
            variant={"outline"}
            asChild
            className="hidden md:flex"
          >
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

      {/* Banner 1 */}
      <div className="flex h-auto w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border border-orange-200 bg-gradient-to-b from-orange-50 to-orange-100 p-4 md:justify-between lg:h-28 lg:flex-row">
        <div className="space-y-2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-orange-600">
            In store or online your health & safety is our top priority
          </h2>
          <p className="text-xs text-muted-foreground md:text-sm">
            The only supermarket that makes your life easier, makes you enjoy
            life and makes it better
          </p>
        </div>

        <div className="relative flex h-[200px] justify-center">
          <Image
            src={"/banner1.png"}
            alt="banner 1"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* New Arrivals */}
      <div className="py-4">
        <div className="flex flex-col items-baseline gap-0 md:flex-row md:gap-2">
          <h1 className="text-2xl font-bold">New Arrivals</h1>
          <p className="flex-1 text-sm text-muted-foreground">
            Dont miss our amazing products
          </p>
          <Button
            size={"sm"}
            variant={"outline"}
            asChild
            className="hidden md:flex"
          >
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
