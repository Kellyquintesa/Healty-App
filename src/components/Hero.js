import React from "react";

function Hero() {
  return (
    <div className=" bg-[#fafafa] h-full ">
      <div
        className="     
      container 
      p-10
      lg:py-52 
      md:grid 
      md:grid-cols-2 
      place-items-center "
      >
        <div>
          <p
            className=" 
        text-red-400
        font-semibold
        text-xl"
          >
            Fitness Club
          </p>
          <span
            className="
        text-4xl
        lg:text-6xl
      text-[#4d416c]
        font-bold"
          >
            Sweat, Smile <br /> And Repeat
          </span>
          <br />
          <button
            className="
        mt-7
        py-2 
        px-5
        lg:px-10 
        bg-[#4d416c]
        hover:bg-[#815ae5]
        rounded-full
        text-white
        font-normal
        
        "
          >
            Explore Exercise
          </button>
        </div>
        <div>image</div>
      </div>
    </div>
  );
}

export default Hero;
