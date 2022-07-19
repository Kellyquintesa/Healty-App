import React from "react";

const List = (props) => (
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
      💪 <p className="pt-5">{props.title}</p>
    </div>
  </div>
);
function ExercisesList() {
  return (
    <div className="">
      <div
        className=" 
      container 
      py-10 
      grid 
      grid-cols-2
      md:grid-cols-3
      place-items-center"
      >
        <List title="Chest" />
        <List title="Leg" />
        <List title="Back" />
        <List title="Biceps" />
        <List title="Triceps" />
        <List title="Butt" />
      </div>
    </div>
  );
}

export default ExercisesList;
