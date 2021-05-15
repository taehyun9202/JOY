import React from "react";
import ShopFilter from "./ShopFilter";
import { BestSellers, MothersDay } from "../Data";
function Shop() {
  return (
    <div className="flex w-full px-10 py-6 h-full sm:px-16 md:px-28 lg:px-40 space-x-10">
      <ShopFilter />
      <div className="flex-1">
        <div>
          <p className="text-2xl font-semibold">Mother's Day Items</p>
          {MothersDay.map((item) => (
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-2xl font-semibold">Best Sellers</p>
          {BestSellers.map((item) => (
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
