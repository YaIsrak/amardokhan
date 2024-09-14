import ProductCard from "@/components/Card/ProductCard";
import QuantityButton from "@/components/QuantityButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById } from "@/lib/fetchData";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/typing";
import { StarFilledIcon } from "@sanity/icons";
import {
  ArrowUpRightIcon,
  Heart,
  LucideShoppingCart,
  ShieldCheck,
  ShoppingBag,
  Star,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import ProductCarousel from "./ProductCarousel";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product: Product = await getProductById(params.productId);

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-4">Product not found</main>
    );
  }

  const relatedProducts: Product[] = await client.fetch(`
    *[_type == "product" && category[0]->_id == "${product.category[0]._id}"][0..5]{
      ...,
      "images": image[].asset->url
    }`);

  return (
    <main className="container mx-auto px-4 py-4">
      {/* main detailes */}
      <div className="flex flex-col items-center gap-4 md:flex-row">
        {/* Images */}
        <div className="flex-1">
          <ProductCarousel imageUrls={product.images} />
        </div>
        {/* Side details */}
        <div className="flex-1 space-y-2">
          {/* Name */}
          <h1 className="text-5xl font-bold">{product.name}</h1>
          {/* Rating */}
          <p className="flex items-center gap-2 text-muted-foreground">
            Rating
            <span className="flex items-center gap-1 rounded-full border p-1.5 text-xs">
              <Star className="h-4 w-4 text-yellow-500" />
              {product.rating}
            </span>
          </p>

          <Separator className="my-8" />

          <p className="text-sm text-muted-foreground">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
            Vivamus adipiscing nisl ut dolor dignissim semper.
          </p>
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-red-500 lg:text-2xl">
              ৳ {product.price - (product.price * product.discount) / 100}
            </p>
            {product.discount !== 0 && (
              <p className="text-base font-bold text-muted-foreground line-through">
                ৳{product.price}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            {/* Quantity */}
            <QuantityButton />

            {/* Add to cart */}
            <Button className="bg-green-600 hover:bg-green-700">
              <LucideShoppingCart className="mr-2 h-4 w-4" />
              Add to cart
            </Button>

            {/* Buy now */}
            <Button asChild>
              <Link href={`/checkout/${product._id}`}>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Buy now
              </Link>
            </Button>
          </div>

          <Separator className="my-8" />

          {/* Details */}
          <div className="my-8 rounded-xl border">
            <div className="flex items-center gap-4 px-4 py-2 text-xs text-muted-foreground">
              <Wallet className="size-12" />
              Payment. Payment upon receipt of goods, Payment by card in the
              department, Google Pay, Online card, -5% discount in case of
              payment
            </div>
            <Separator />
            <div className="flex items-center gap-4 px-4 py-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-12" />
              Warranty. The Consumer Protection Act does not provide for the
              return of this product of proper quality.
            </div>
          </div>

          {/* Action Button */}
          <div className="item-center flex gap-2">
            <Button
              variant={"outline"}
              size="sm"
              className="rounded-xl hover:bg-red-100 hover:text-red-500"
            >
              <Heart className="mr-2 h-4 w-4" />
              Add to wishlist
            </Button>

            <Button variant={"outline"} size="sm" className="rounded-xl">
              <ArrowUpRightIcon className="mr-2 h-4 w-4" />
              Share this product
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Extranal detailes */}
      <Tabs defaultValue="description">
        {/* List */}
        <TabsList className="my-0 bg-transparent">
          <TabsTrigger
            value="description"
            className="my-0 rounded-none border-black bg-transparent shadow-none data-[state=active]:border-b data-[state=active]:shadow-none"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-black bg-transparent shadow-none data-[state=active]:border-b data-[state=active]:shadow-none"
          >
            Reviews ({product.rating})
          </TabsTrigger>

          {/* Content */}
        </TabsList>
        <Separator />
        {/* Content */}
        <TabsContent value="description" className="my-4 px-4">
          <p className="text-sm">{product.description}</p>
        </TabsContent>
        <TabsContent value="reviews" className="my-4 px-4">
          <p className="text-lg font-semibold">
            {product.rating} reviews for {product.name}
          </p>
          <div className="my-4 flex items-center gap-4">
            <h1 className="text-8xl">{product.rating}</h1>
            <div className="flex">
              <StarFilledIcon
                className={cn(
                  "size-20",
                  product.rating >= 1 ? "text-yellow-500" : "text-gray-400",
                )}
              />
              <StarFilledIcon
                className={cn(
                  "size-20",
                  product.rating >= 2 ? "text-yellow-500" : "text-gray-400",
                )}
              />
              <StarFilledIcon
                className={cn(
                  "size-20",
                  product.rating >= 3 ? "text-yellow-500" : "text-gray-400",
                )}
              />
              <StarFilledIcon
                className={cn(
                  "size-20",
                  product.rating >= 4 ? "text-yellow-500" : "text-gray-400",
                )}
              />
              <StarFilledIcon
                className={cn(
                  "size-20",
                  product.rating >= 5 ? "text-yellow-500" : "text-gray-400",
                )}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      {/* More like this */}
      <div>
        <h1 className="text-lg font-semibold">Related Products</h1>

        {relatedProducts && relatedProducts.length > 0 && (
          <div className="grid grid-cols-2 py-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
