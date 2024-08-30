"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import UserButton from "./UserButton";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex items-center gap-6 px-4 py-4">
        {/* fix: Brand logo  */}
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        </Link>

        {/* Search bar */}
        <Input
          placeholder="Search for product"
          className="h-12 w-1/2 flex-1 bg-muted px-12"
        />

        {/* Menu */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            <span className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-600 px-2 py-1 text-xs text-white">
              0
            </span>
          </Link>

          {/* User or login */}
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
