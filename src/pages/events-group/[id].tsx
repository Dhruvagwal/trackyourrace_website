import React from "react";
import Navbar from "@/components/main/navbar";
import { CarouselItem } from "@/components/ui/carousel";
import { MARATHON } from "..";
import EventCard from "@/components/main/event-card";

function EventsGroup() {
  return (
    <div className="px-main relative max-md:px-main-md">
      <Navbar />
      {/* orb */}
      <div className="blur-[200px] absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
      <div className="z-1 md:flex items-center justify-between text-xl mt-12 relative">
        <h1 className="text-7xl font-medium md:w-[60%] max-md:text-3xl">
          Marathon events
        </h1>
        <p className="text-white/80">
          No matter your passion, find the perfect challenge.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
        {MARATHON?.map((item, index) => (
          <EventCard key={index} {...item} title="Full Marathon" />
        ))}
      </div>
    </div>
  );
}

export default EventsGroup;
