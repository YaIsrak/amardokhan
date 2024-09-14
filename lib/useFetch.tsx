"use client";

import { client } from "@/sanity/lib/client";
import { Category, Product } from "@/types/typing";
import { useEffect, useState } from "react";
import { getCategories } from "./fetchData";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      //   Main Fetching
      await getCategories()
        .then((data) => {
          setCategories(data);
          setLoading(false);
          setError(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    };

    fetchData(); //call fetchData
  }, []);

  return {
    categories,
    loading,
    error,
  };
}

export function useAllProducts({
  categoryID,
  minPrice,
  maxPrice,
  // inStock,
  searchParams,
}: {
  categoryID?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  searchParams?: URLSearchParams;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetching data function
    async function fetchData() {
      setLoading(true);

      await client
        .fetch(
          `
        *[_type == "product"
        ${
          categoryID &&
          categoryID !== "all" &&
          `&& "${categoryID}" in category[]._ref`
        }
          && price >= ${minPrice}
          && price <= ${maxPrice}
        ]{
          ...,
          "images": image[].asset-> url
        }
        `,
        )
        .then((data) => {
          setProducts(data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }

    // call fetchData
    fetchData();
  }, [searchParams, categoryID, minPrice, maxPrice]);

  return {
    products,
    loading,
    error,
  };
}
