import { getCategories } from "@/lib/fetchData";
import { Category } from "@/types/typing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Separator } from "../ui/separator";

const sliderItems = [
  {
    id: 1,
    title: "Specialist in the grocery store",
    price: "800",
    image: "/slider-image-1.jpg",
  },
  {
    id: 1,
    title: "Feed your family the best",
    price: "700",
    image: "/slider-image-2.jpg",
  },
  {
    id: 1,
    title: "Grocery full of Inspiration",
    price: "600",
    image: "/slider-image-3.jpg",
  },
];

export default async function Header() {
  const categories: Category[] = await getCategories();

  return (
    <div className="grid grid-cols-6 gap-4">
      {/* Categories */}
      <div className="col-span-2 hidden rounded-xl border p-4 md:block">
        <h1 className="text-lg font-bold">All Categories</h1>
        <Separator className="my-2" />
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/shop/?category=${category._id}`}
              className="text-sm text-foreground hover:text-blue-500"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Heading 2 */}
      <div className="col-span-4 overflow-hidden rounded-2xl">
        <Carousel className="h-full">
          <CarouselContent className="">
            {sliderItems.map((item) => (
              <CarouselItem key={item.id} className="relative">
                <Image
                  src={item.image}
                  alt="slider image 1"
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 flex items-center px-20">
                  <div className="space-y-4">
                    <h1 className="text-5xl font-bold">{item.title}</h1>
                    <p>Only this week, dont&apos; miss</p>
                    <p>
                      from{" "}
                      <span className="text-5xl font-bold text-rose-500">
                        ৳ 800
                      </span>
                    </p>
                    <Button className="bg-indigo-500" asChild>
                      <Link href="/shop">
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
