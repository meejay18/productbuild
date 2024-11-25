import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const Navs = [
    {
      id: 1,
      title: "HOME",
      url: "/",
    },
    {
      id: 1,
      title: "SHOP",
      url: "cartpage",
    },
    {
      id: 1,
      title: "ABOUT",
    },
    {
      id: 1,
      title: "CONTACT US",
    },
  ];
  return (
    <div className="w-full h-[4rem] flex justify-between">
      <div className="w-[40%] h-[100%] flex justify-center items-center">
        <div className="w-[95%] h-full  flex justify-center items-center gap-10 font-medium">
          {Navs.map((el: any) => (
            <div>
              <Link to={el.url}>{el.title}</Link>
              {/* {el.url} */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[30%] h-[100%] flex justify-center items-center">
        <img
          src="https://cdn.prod.website-files.com/650ead4725167461fb17feed/651d5590ab86f0d972823425_walkstep.svg"
          alt=""
        />
      </div>
      <div className="w-[20%] h-[100%]  flex justify-center items-center">
        <button
          className="font-medium border rounded-md text-white  bg-black p-3 animate-pulse "
          // onClick= {
          //   <Link to={}
          // }
        >
          {" "}
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
