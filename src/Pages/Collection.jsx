import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";
import SearchBar from "../Components/SearchBar";

const Collection = () => {
  const { products, search, setSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (category.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <SearchBar />
      <div className="flex flex-col gap-1 pt-10 sm:flex-row sm:gap-10">
        {/* Fiter Options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 my-2 text-xl cursor-pointer"
          >
            FILTERS
            <img
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>
          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  onChange={toggleCategory}
                  type="checkbox"
                  value={"Men"}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  onChange={toggleCategory}
                  type="checkbox"
                  value={"Women"}
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  onChange={toggleCategory}
                  type="checkbox"
                  value={"Kids"}
                />
                Kids
              </p>
            </div>
          </div>
          {/* SubCategory Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value={"Topwear"}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value={"Bottomwear"}
                />{" "}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value={"Winterwear"}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <div className="flex justify-between mb-4 text-base sm:text-2xl">
            <Title text1={"ALL"} text2={"COLLECTION"} />
            {/* Product Sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="px-2 text-sm border border-gray-300 outline-none"
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Map Product */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
            {filterProduct?.map((item, index) => (
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
      </div>
    </>
  );
};

export default Collection;
