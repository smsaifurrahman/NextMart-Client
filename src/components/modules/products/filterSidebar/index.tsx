"use client";

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

const FilterSidebar = () => {
  return (
    <aside className="w-full max-w-xs rounded-2xl bg-white p-4 shadow">
      {/* Filter by Price */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Filter by Price</h2>
        <Slider defaultValue={[50]} max={100} step={1} />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      {/* Product Types */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Product Types</h2>
        {[
          "Laptop & Accessories",
          "Computer Parts",
          "Speakers & Woofer",
          "Keyboards & Mouse",
          "Camera",
          "Video Recording",
          "Tablet",
          "Table Lights",
        ].map((item) => (
          <div key={item} className="flex items-center space-x-2 mb-2">
            <Checkbox id={item} />
            <Label htmlFor={item}>{item}</Label>
          </div>
        ))}
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Brands</h2>
        {[
          "HP (15)",
          "Apple (25)",
          "RealMe (12)",
          "OnePlus (7)",
          "Camera",
        ].map((brand) => (
          <div key={brand} className="flex items-center space-x-2 mb-2">
            <Checkbox id={brand} />
            <Label htmlFor={brand}>{brand}</Label>
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Rating</h2>
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center space-x-2 mb-2">
            <Checkbox id={`rating-${rating}`} />
            <Label htmlFor={`rating-${rating}`} className="flex items-center space-x-1">
              <span>{rating}.00</span>
              <div className="flex text-yellow-400">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
                ))}
              </div>
            </Label>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className="mb-2">
        <h2 className="text-lg font-semibold mb-2">Availability</h2>
        {["In Stock", "Pre-Order", "Upcoming"].map((status) => (
          <div key={status} className="flex items-center space-x-2 mb-2">
            <Checkbox id={status} />
            <Label htmlFor={status}>{status}</Label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
