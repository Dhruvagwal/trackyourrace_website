import React from "react";
import Navbar from "@/components/main/navbar";
import Image from "next/image";
import TopScroller from "@/registry/toTop";
function ContactUs() {
  return (
    <div className="px-main relative max-md:px-main-md">
      <Navbar />
      <TopScroller/>
      {/* orb */}
      <div className="blur-[200px] absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
      <div className="z-1 mt-12 relative">
        <Image
          className="object-cover h-[50vh] w-full rounded-3xl"
          width={1500}
          height={500}
          alt="event"
          src="https://images.unsplash.com/photo-1596460658047-1826d5921c56?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}

export default ContactUs;
