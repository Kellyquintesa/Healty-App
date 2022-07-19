import React, { useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

function SearchExercise() {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      console.log(exercisesData);
    }
  };
  return (
    <div className=" bg-[#fafafa] h-full ">
      <div className="container py-10 w-ful   ">
        <h1 className="text-center font-bold text-3xl">
          Awesome Exercise You <br />
          Should Know
        </h1>
        <div className="flex mt-5 place-content-center  ">
          <input
            className="
        border
        py-2
        w-44
        md:w-full
        lg:max-w-6xl
        p-5
        "
            type="text"
            placeholder="Searh Exercise"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <button
            className="
          py-2 
          px-3
          lg:px-7 
          border
          bg-rose-500 
          hover:bg-red-600
          text-white
          font-semibold"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchExercise;
