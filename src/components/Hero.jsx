import React from "react";
import box from "../Images/boxed-water-is-better-sOo9HuAfKa0-unsplash.jpg";

const Hero = () => {
  return (
    <main className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 border border-solid m-2 p-2 gap-10 md:h-96 shadow-lg">
      <div className="grid grid-rows-4">
        <section>
          <h1 className="font-bold p-4 text-center text-2xl md:text-3xl">
            Hotel Reservation System
          </h1>
        </section>
        <section>
          <p className="text-sm text-center">
            Take your small property's bookings online with GrihaNepal
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-4 justify-center">
          <div id="availabilityButton">
            <button className="bg-black text-white font-bold py-2 px-4 rounded">
              Availability
            </button>
          </div>
          <div>
            <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Try for free
            </button>
          </div>
        </section>
      </div>
      <div className="bg-black h-64 md:h-full">
        <img className="w-full h-full object-cover" src={box} alt="" />
      </div>
    </main>
  );
};

export default Hero;
