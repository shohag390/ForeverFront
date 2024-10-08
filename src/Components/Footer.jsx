import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            deleniti sequi dolore sed expedita temporibus eum, odio id facere
            alias exercitationem libero dolores, veritatis recusandae voluptas
            laboriosam consequatur totam adipisci!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li>+1 (257)-364-3564</li>
            <li>contactsforever@gamil.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 &copy; forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
