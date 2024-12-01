import React from "react";

const CardComponents = () => {
  const data = [
    {
      id: 1,
      title: "Men's footwear",
      url: "",
      photoImage: "",
      size: "40-46",
    },
    {
      id: 2,
      title: "women's footwear",
      url: "",
      photoImage: "",
      size: "40-46",
    },
    {
      id: 3,
      title: "unisex Sports wears and outfitsv",
      url: "",
      photoImage: "",
      size: "any size",
    },
    {
      id: 4,
      title: "children's footwear",
      url: "",
      photoImage: "",
      size: "7-15",
    },
  ];
  return (
    <div className="w-full h-screen bg-[gray] flex justify-center items-center">
      <div className="w-[80%] h-[95%] bg-[blue] grid grid-cols-2 ">
        {data.map((el: any) => (
          <div></div>
        ))}
      </div>
    </div>
  );
};

export default CardComponents;
