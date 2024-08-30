import { getCategories } from "@/lib/fetchData";
import { Category } from "@/types/typing";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default async function Header() {
  const categories: Category[] = await getCategories();
  console.log(categories[0]);

  return (
    <div className="grid grid-cols-6 gap-4">
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
      <h2 className="col-span-4">heading</h2>
    </div>
  );
}
