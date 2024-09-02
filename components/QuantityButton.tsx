"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function QuantityButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-3 rounded-md border px-2 py-2">
      <button onClick={() => setCount((prev) => prev + 1)}>
        <Plus />
      </button>
      <span>{count}</span>
      <button
        disabled={count === 0}
        onClick={() => setCount((prev) => prev - 1)}
        className="disabled:cursor-not-allowed"
      >
        <Minus className={count === 0 ? "text-gray-400" : ""} />
      </button>
    </div>
  );
}
