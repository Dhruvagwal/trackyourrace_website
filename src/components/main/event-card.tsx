import { ArrowUpRight, Calendar, Map } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
export interface IEvent {
  title: string;
  id: string;
  date: string;
  location: string;
  image: string;
}
function EventCard({ title, date, location, image, id }: IEvent) {
  return (
    <div className="bg-secondary rounded-2xl w-full p-4">
      <div className="relative">
        <Image
          className="card-mask object-cover h-[19rem] md:h-[24rem]"
          src={image}
          width={500}
          height={500}
          alt={title}
        />
          <Link href={`/events/${id}`}>
        <Button asChild className="rounded-full md:w-14 w-12 h-12 md:h-14 bottom-0 -right-2 absolute ">
            <ArrowUpRight />
        </Button>
          </Link>
      </div>
      <p className="text-xl mt-4 font-semibold">{title}</p>
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4" /> {date}
        </span>
        <span className="flex items-center gap-2">
          <Map className="w-4 h-4" />
          {location}
        </span>
      </div>
    </div>
  );
}

export default EventCard;
