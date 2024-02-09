import React from "react";
import Edwid from "../Images/edvin-johansson-rlwE8f8anOc-unsplash.jpg";

const Information = () => {
  return (
    <section class="grid border border-solid m-2 bg-[rgb(200,245,238)] gap-10 h-48">
      <div class="flex">
        <img class="w-full h-48 object-cover" src={Edwid} alt="hotel Image" />
      </div>
    </section>
  );
};

export default Information;
