import React from "react";
import data from "../data.json";

const HomePage = () => {
  return (
    <div>
      <div className="w-full h-[30rem] bg-black flex justify-center items-center">
        <div className="w-[95%] h-[95%]  flex items-center ">
          <div className="w-[50%] h-[80%] ">
            <h1 className="text-[60px] text-white font-semibold text-center">
              Money cannot buy love but it can buy the shoes!!!!
            </h1>
          </div>
          <div className="w-[50%] h-[80%] bg-white border rounded-md">
            <img
              className="w-[100%] h-[100%] border rounded-md  "
              src="https://assets-global.website-files.com/650ead4725167461fb17feed/651129ebc1acf66d1271a0a5_offer-01.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[30rem] bg-black justify-center items-center flex">
        <div className="w-[90%] h-[90%] bg-white grid grid-cols-3 grid-rows-2 justify-center items-center">
          {data.map((el: any) => (
            <div className="w-[200px] h-[100px]">
              <img
                className="w-[150px] flex justify-center items-center"
                src={el.avatar}
                alt=""
              />
              <div>{el.price}</div>
              {/* <div>{el.category}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
