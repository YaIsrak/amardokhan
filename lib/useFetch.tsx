"use client";

import { Category } from "@/types/typing";
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
        .catch((err) => {
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
