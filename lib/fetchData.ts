"use server";

import { client } from "@/sanity/lib/client";

export const getCategories = async () => {
  const data = await client.fetch(
    `*[_type == "category"] | order(name)`,

    { cache: "no-store" },
  );

  return data;
};
