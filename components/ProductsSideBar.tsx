"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCategories } from "@/lib/useFetch";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export default function ProductsSideBar() {
  const { categories, loading, error } = useCategories();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "0");
  const [maxPrice, setMaxPrice] = useState(
    searchParams.get("maxPrice") || "500",
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("filterCat") || "",
  );
  const [inStock, setInStock] = useState(
    searchParams.get("stockStatus") === "inStock",
  );

  // info: Aplly Filter 🍭
  const applyFilter = () => {
    const query = new URLSearchParams();

    if (minPrice) query.set("minPrice", minPrice);
    if (maxPrice) query.set("maxPrice", maxPrice);
    if (selectedCategory) query.set("filterCat", selectedCategory);
    if (inStock) query.set("stockStatus", "inStock");

    router.push(`/shop?${query.toString()}`);
    router.refresh();
    toast("Filter Applied, Please refresh manually");
  };

  return (
    <div>
      {/* Price Filter */}
      <div>
        <h4 className="text-sm font-semibold">Widget price Filter</h4>

        <div className="my-4 flex items-center gap-2">
          <div className="">
            <Label className="text-xs text-muted-foreground">Min Price</Label>
            <Input
              type="number"
              placeholder="Min price"
              className="text-xs"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <p>-</p>
          <div className="">
            <Label className="text-xs text-muted-foreground">Max Price</Label>
            <Input
              type="number"
              value={maxPrice}
              placeholder="Max price"
              className="text-xs"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">
            Price {minPrice}-{maxPrice} BTD
          </p>
          <Button size="sm" variant={"secondary"} onClick={applyFilter}>
            Filter
          </Button>
        </div>
      </div>

      <Separator className="my-8" />

      {/* filter Categories */}
      <div>
        <h4 className="text-sm font-semibold">Widget price Filter</h4>

        <RadioGroup
          defaultValue=""
          className="my-4"
          value={selectedCategory || ""}
          onValueChange={(e) => setSelectedCategory(e)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="" id="r1" />
            <Label htmlFor="r1" className="text-xs">
              All
            </Label>
          </div>
          {/* loading state */}
          {loading && (
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              Loading...
            </div>
          )}
          {!loading &&
            !error &&
            categories?.map((category) => (
              <div className="flex items-center space-x-2" key={category._id}>
                <RadioGroupItem value={category._id} id={category._id} />
                <Label htmlFor={category._id} className="text-xs">
                  {category.name}
                </Label>
              </div>
            ))}
        </RadioGroup>
      </div>

      <Separator className="my-8" />

      {/* Filter Stock */}
      <div>
        <h4 className="text-sm font-semibold">Product Status</h4>

        <div className="my-4 flex items-center space-x-2">
          <Checkbox
            id="stock"
            checked={inStock}
            onCheckedChange={(checked: CheckedState) => {
              if (typeof checked === "boolean") {
                setInStock(checked);
              }
            }}
          />
          <label
            htmlFor="stock"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            In stock
          </label>
        </div>
      </div>
    </div>
  );
}
