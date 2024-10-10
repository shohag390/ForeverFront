import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="pt-16 border-t">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            className="flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between"
            key={index}
          >
            <div className="flex items-center gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">25, Jul,2024</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="h-2 bg-green-500 rounded-full min-w-2"></p>
                <p className="text-sm md:text-base">Ready to ship </p>
              </div>
              <button className="px-4 py-2 text-sm font-medium border rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
