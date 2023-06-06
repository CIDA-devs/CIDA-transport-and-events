import React from "react";

function what() {
  return (
    <div className="max-w-[1800px] mx-auto mt-20 px-10">
      <div className="flex md:flex-row flex-col justify-between gap-10 text-center">
        <div className="w-[100%]">
          <h1 className="text-4xl font-semibold">Our Services </h1>{" "}
        </div>
        <div className="w-[100%]">
          <h1 className="text-2xl font-semibold"> Event Planning</h1>
          <div className="pt-5">
            {" "}
            <ul className="li">Birthday</ul>
            <ul className="li">Parties</ul>
            <ul className="li">Conferences</ul>
            <ul className="li">Seminars</ul>
          </div>
        </div>
        <div className="w-[100%]">
          <h1 className="text-2xl font-semibold"> Car Rentals</h1>
          <div className="pt-5">
            {" "}
            <ul className="li">Birthday</ul>
            <ul className="li">Parties</ul>
            <ul className="li">Conferences</ul>
            <ul className="li">Seminars</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default what;
