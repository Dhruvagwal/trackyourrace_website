import React from "react";
import Navbar from "@/components/main/navbar";
function Events() {
  return (
    <div className="px-main relative max-md:px-main-md">
      <Navbar />
      <div className="blur-[200px] absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
      <div className="z-1 mt-12 relative">
        <h1 className="text-7xl font-medium md:w-[60%] max-md:text-3xl">
          Find, Train, and Compete in Events Around the World
        </h1>
      </div>
    </div>
  );
}

export default Events;
