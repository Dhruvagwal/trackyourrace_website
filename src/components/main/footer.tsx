import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-secondary flex flex-col gap-10 md:items-center p-main mt-12">
      <Link href="/" className="flex items-center" prefetch={false}>
        <Image src="/logo.svg" width={70} height={70} alt="logo" />
        <span className="md:text-3xl font-bold">Track Your Race</span>
      </Link>
      <p className="text-3xl ">
        Subscribe for updates on events, training tips, and exclusive offers
      </p>
      <div className="flex justify-center md:w-[30vw] gap-4">
        <Input className="p-4 w-full h-12" placeholder="Enter your email" />
        <Button className="h-auto">Subscribe Now</Button>
      </div>
    </div>
  );
}

export default Footer;
