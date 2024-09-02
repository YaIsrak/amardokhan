"use client";

import ProductsSideBar from "@/components/ProductsSideBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const hasQueryParams = searchParams.toString().length > 0;

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-6 gap-6">
        <h1 className="col-span-1 hidden lg:flex">
          <ProductsSideBar />
        </h1>

        {/* Main */}
        <h2 className="col-span-6 lg:col-span-5">
          {/* Clear filter */}
          {hasQueryParams && (
            <Link href="/shop">
              <p className="my-2 flex items-center gap-1 text-sm">
                <X className="size-4" />
                Clear filter
              </p>
            </Link>
          )}

          {/* Mobile Filter Topbar */}
          <div className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-xs">
            {/* Filter */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <p className="flex items-center gap-1 font-semibold">
                    <Filter className="size-4" />
                    Filter
                  </p>
                </SheetTrigger>
                <SheetContent>
                  <ProductsSideBar />
                </SheetContent>
              </Sheet>
            </div>

            {/* todo: */}
            <p className="text-muted-foreground">Showing 1-20 of 159 results</p>

            {/* Short by */}
            <div className="flex items-center gap-2">
              <p>Sort by</p>
              <Select defaultValue="latest">
                <SelectTrigger className="w-[56] border-none bg-transparent text-xs font-semibold ring-0 focus:ring-0">
                  <SelectValue placeholder="Short by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Sort by latest</SelectItem>
                  <SelectItem value="lowToHight">
                    Sort by price ( low to hight )
                  </SelectItem>
                  <SelectItem value="hightToLow">
                    Sort by price ( hight to low )
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </h2>
      </div>
    </main>
  );
}
