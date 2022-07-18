import React from "react";

function SearchExercise() {
  return (
    <div>
      <div className="container py-10 ">
        <h1>
          Awesome Exercise You <br />
          Should Know
        </h1>
        <div className="flex">
          <input
            className="
        border
        py-2
        w-full"
            type="text"
            placeholder="Searh Exercise"
          />
          <button className="py-2 px-4 border bg-rose-500 text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchExercise;
