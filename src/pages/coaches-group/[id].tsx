import React from "react";
import Navbar from "@/components/main/navbar";
import { GYM_COACHES } from "..";
import CoachCard from "@/components/main/coach-card";
import TopScroller from "@/registry/toTop";

function CoachesGroup() {
  return (
    <div className="px-main relative max-md:px-main-md">
      <Navbar />
      <TopScroller/>
      {/* orb */}
      <div className="blur-[200px] absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
      <div className="z-1 mt-12 relative">
        <h1 className="text-7xl font-medium md:w-[60%] max-md:text-3xl">
          Our Expert Coaches
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
        {GYM_COACHES.map((item, index) => (
          <CoachCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CoachesGroup;
