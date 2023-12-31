import Price from "@/components/price";
import Image from "next/image";
import React from "react";

const singleProduct = {


  id: 1,
  title: "Porcelain (white)",
  desc: "Embrace wisdom and prosperity with our Porcelain Ganesh. Meticulously crafted, it exudes spirituality and blessings. A divine piece for your space, inviting positivity and grace into your life.",
  img: "/p1.PNG",
  price: 249,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

const SingleProductPage = () => {



  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#393646] md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  );
};

export default SingleProductPage;