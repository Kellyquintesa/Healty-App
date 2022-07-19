import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {movies.map((data, index) => {
        return (
          <div
            className="
  border 
  hover:bg-slate-50
  cursor-pointer
  w-40 
  h-40 
  m-5 
  rounded-md 
  shadow-md "
          >
            <div className="text-center pt-16 ">
              💪 <p className="pt-5">{data.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FetchData;
