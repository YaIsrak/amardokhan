"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductCarousel({
  imageUrls,
}: {
  imageUrls: string[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {imageUrls.map((image) => (
          <CarouselItem key={image}>
            <Image
              src={image}
              alt={image}
              width={1000}
              height={1000}
              className="h-full w-full rounded-2xl object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="my-2 flex items-center justify-center gap-1">
        {imageUrls.map((image, i) => (
          <div
            className={cn(
              "size-2 rounded-full border border-black",
              current === i + 1 ? "bg-black" : "",
            )}
            key={image}
          ></div>
        ))}
      </div>
    </Carousel>
  );
}
