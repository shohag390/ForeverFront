import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="py-2 text-3xl text-center">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item?._id}
            image={item?.image}
            name={item?.name}
            price={item?.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
