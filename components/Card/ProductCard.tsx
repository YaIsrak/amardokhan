import { cn } from "@/lib/utils";
import { Product } from "@/types/typing";
import { StarFilledIcon } from "@sanity/icons";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product._id}`}
      className="relative overflow-hidden rounded-md border border-muted px-4 py-6 transition-all hover:border-muted-foreground hover:shadow-md"
    >
      {/* discount */}
      {product.discount !== 0 && (
        <div className="absolute left-4 w-16 rounded-l-sm rounded-r-2xl bg-red-500 p-2 text-xs text-white">
          {product.discount}% off
        </div>
      )}

      {/* image */}
      <div className="relative aspect-square w-full">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={500}
          height={500}
        />
      </div>

      {/* name */}
      <h3 className="text-nowrap text-base font-semibold md:text-lg">
        {product.name}
      </h3>

      {/* Instock */}
      <p
        className={cn(
          "text-xs md:text-sm",
          product.stock ? "text-green-500" : "text-red-500",
        )}
      >
        {product.stock ? "In Stock" : "out of Stock"}
      </p>

      {/* price */}
      <div className="flex items-baseline gap-2">
        <p className="text-xl font-bold text-red-500 lg:text-2xl">
          ৳{product.price - (product.price * product.discount) / 100}
        </p>
        {product.discount !== 0 && (
          <p className="text-base font-bold text-muted-foreground line-through">
            ৳{product.price}
          </p>
        )}
      </div>

      {/* rating star */}
      <div className="flex">
        <StarFilledIcon
          className={cn(
            "size-4 md:size-6",
            product.rating >= 1 ? "text-yellow-500" : "text-gray-400",
          )}
        />
        <StarFilledIcon
          className={cn(
            "size-4 md:size-6",
            product.rating >= 2 ? "text-yellow-500" : "text-gray-400",
          )}
        />
        <StarFilledIcon
          className={cn(
            "size-4 md:size-6",
            product.rating >= 3 ? "text-yellow-500" : "text-gray-400",
          )}
        />
        <StarFilledIcon
          className={cn(
            "size-4 md:size-6",
            product.rating >= 4 ? "text-yellow-500" : "text-gray-400",
          )}
        />
        <StarFilledIcon
          className={cn(
            "size-4 md:size-6",
            product.rating >= 5 ? "text-yellow-500" : "text-gray-400",
          )}
        />
      </div>

      {/* Cart button */}
      <Button
        className="mt-4 flex w-full justify-between"
        size={"sm"}
        variant={"outline"}
      >
        {/* todo: add to cart */}
        Add to Cart <Plus className="mr-2 h-4 w-4" />
      </Button>
    </Link>
  );
}
