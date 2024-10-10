import { useContext, useEffect, useState } from "react";
import { assets, products } from "../assets/assets";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";

const Prodect = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [tab, setTab] = useState("description");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="pt-10 transition-opacity duration-500 ease-in border-t opacity-100">
      {/*-------------Product Data-------------*/}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        {/*-----------Product Images---------------*/}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/*------------Product Info-----------*/}
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{productData?.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets?.star_icon} className="w-3" alt="" />
            <img src={assets?.star_icon} className="w-3" alt="" />
            <img src={assets?.star_icon} className="w-3" alt="" />
            <img src={assets?.star_icon} className="w-3" alt="" />
            <img src={assets?.star_dull_icon} className="w-3" alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData?.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData?.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData?.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="px-8 py-3 text-sm text-white duration-500 bg-black active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* --------Description & Review Section-------- */}

      <div className="mt-20">
        <div className="flex">
          <p
            onClick={() => setTab("description")}
            className={`px-5 py-3 text-sm border cursor-pointer ${
              tab === "description" ? "font-bold" : ""
            }`}
          >
            Description
          </p>
          <p
            onClick={() => setTab("review")}
            className={`px-5 py-3 text-sm border cursor-pointer ${
              tab === "review" ? "font-bold" : ""
            }`}
          >
            Reviews (122)
          </p>
        </div>
        <div className="px-6 py-6 text-sm text-gray-500 border">
          {tab === "description" && (
            <div>
              <p className="pb-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                eaque ipsa exercitationem odit laborum, quos mollitia
                cupiditate! Ipsam laborum expedita quisquam, voluptatum quis
                optio eveniet sit excepturi. Commodi nihil repudiandae
                repellendus adipisci ducimus, fugit provident facilis illum
                voluptatum veniam officiis. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quasi eaque ipsa exercitationem
                odit laborum, quos mollitia cupiditate! Ipsam laborum expedita
                quisquam, voluptatum quis optio eveniet sit excepturi. Commodi
                nihil repudiandae repellendus adipisci ducimus, fugit provident
                facilis illum voluptatum veniam officiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                eaque ipsa exercitationem odit laborum, quos mollitia
                cupiditate! Ipsam laborum expedita quisquam, voluptatum quis
                optio eveniet sit excepturi. Commodi nihil repudiandae
                repellendus adipisci ducimus, fugit provident facilis illum
                voluptatum veniam officiis. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quasi eaque ipsa exercitationem
                odit laborum.
              </p>
            </div>
          )}
          {tab === "review" && (
            <div>
              <h1>Work Leatter</h1>
            </div>
          )}
        </div>
      </div>
      {/* -----------Display Related Product------------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Prodect;
