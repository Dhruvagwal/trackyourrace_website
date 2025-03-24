import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export interface IGYMCoaches {
  name: string;
  skills: string;
  id: string;
  image: string;
  url: {
    linkdlin: string;
    instagram: string;
    twitter: string;
  };
}

function CoachCard({ data }: { data: IGYMCoaches }) {
  return (
    <div>
      <Image
        className="rounded-xl h-[50vh] object-cover object-left-top"
        alt={`coach ${data.name}`}
        src={data.image}
        width={500}
        height={500}
      />
      <div className="mt-4 flex flex-wrap gap-4 justify-between">
        <div>
          <p className="text-xl font-semibold">{data.name}</p>
          <p>{data.skills}</p>
          <Link href={`/coaches/${data.id}`}>
            <Button asChild className="px-0" variant="link">
              <span>View Profile</span>
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Linkedin />
          </Button>
          <Button variant="outline">
            <Instagram />
          </Button>
          <Button variant="outline">
            <Twitter />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CoachCard;
