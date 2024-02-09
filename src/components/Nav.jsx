import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center gap-5 m-1 p-3 text-black shadow-lg bg-pink-100">
      <div className="text-center mb-2 md:mb-0">Features</div>
      <div className="text-center mb-2 md:mb-0">Resources</div>
      <div className="text-center mb-2 md:mb-0">Pricing</div>
      <div className="flex-grow flex items-center justify-center text-2xl md:text-3xl font-bold mb-2 md:mb-0">
        GrihaNepal
      </div>
      <div className="mb-2 md:mb-0">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Try for free
        </button>
      </div>
      <div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Nav;
