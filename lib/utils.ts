import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
