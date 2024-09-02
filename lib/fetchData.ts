"use server";

import { client } from "@/sanity/lib/client";

export const getCategories = async () => {
  const data = await client.fetch(
    `*[_type == "category"] | order(name)`,

    { cache: "no-store" },
  );

  return data;
};

export const getFeaturedProducts = async () => {
  const data = await client.fetch(
    `*[_type == "product" && featured == true][0..5]{
        ...,
        "images": image[].asset->url
    }`,
    { cache: "no-store" },
  );

  return data;
};

export const getNewArrivalProducts = async () => {
  const data = await client.fetch(
    `*[_type == "product"][0..5]{
        ...,
        "images": image[].asset->url
      }`,
    { cache: "no-store" },
  );

  return data;
};

export const getProductById = async (id: string) => {
  const data = await client.fetch(
    `*[ _id == "${id}"][0]{
          ...,
          category[]->,
          "images": image[].asset->url
      }`,
    { cache: "no-store" },
  );

  return data;
};
