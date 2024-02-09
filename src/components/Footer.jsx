import React from "react";

const Footer = () => {
  return (
    <footer class="bg-slate-800 grid grid-cols-1 md:grid-cols-2 text-white text-lg m-2 text-center h-48 shadow-lg">
      <div class="grid mb-4 md:mb-0">
        <h2 class="text-2xl underline">Product Features</h2>
        <h3>Front Desk</h3>
        <h3>Hotel Booking Engine</h3>
        <h3>Hotel Website Builder</h3>
      </div>
      <div class="grid">
        <h2 class="text-2xl underline">Company</h2>
        <h3>Contact Us</h3>
        <h3>About Us</h3>
        <h3>News</h3>
      </div>
    </footer>
  );
};

export default Footer;
