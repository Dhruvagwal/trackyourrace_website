import EventCard, { IEvent } from "@/components/main/event-card";
import Navbar from "@/components/main/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import CoachCard, { IGYMCoaches } from "@/components/main/coach-card";
import TopScroller from "@/registry/toTop";

export const MARATHON: IEvent[] = [
  {
    date: "August 10, 2022",
    location: "New York, USA",
    title: "Full Marathon",
    id: "1",
    image:
      "https://plus.unsplash.com/premium_photo-1664304814099-adb3a3255e7a?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "July 15, 2022",
    location: "Los Angeles, USA",
    title: "Half Marathon",
    id: "2",
    image:
      "https://plus.unsplash.com/premium_photo-1664304814099-adb3a3255e7a?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "June 20, 2022",
    location: "Chicago, USA",
    title: "3/4 Marathon",
    id: "3",
    image:
      "https://plus.unsplash.com/premium_photo-1664304814099-adb3a3255e7a?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "May 10, 2022",
    location: "Boston, USA",
    title: "1/2 Marathon",
    id: "4",
    image:
      "https://plus.unsplash.com/premium_photo-1664304814099-adb3a3255e7a?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const GYM_COACHES: IGYMCoaches[] = [
  {
    name: "Phillip George",
    id: "1",
    skills: "Running, Cycling, Triathlon",
    url: {
      linkdlin: "https://plus.unsplash.com/",
      instagram: "https://plus.unsplash.com/",
      twitter: "https://plus.unsplash.com/",
    },
    image:
      "https://images.unsplash.com/photo-1599577466565-e9686fee4c18?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Abram Torff",
    id: "1",
    skills: "Running, Cycling, Triathlon",
    url: {
      linkdlin: "https://plus.unsplash.com/",
      instagram: "https://plus.unsplash.com/",
      twitter: "https://plus.unsplash.com/",
    },
    image:
      "https://images.unsplash.com/photo-1701481057396-30fddf7775b6?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Brandon Levin",
    id: "1",
    skills: "Running, Cycling, Triathlon",
    url: {
      linkdlin: "https://plus.unsplash.com/",
      instagram: "https://plus.unsplash.com/",
      twitter: "https://plus.unsplash.com/",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1663040326392-f752798e7394?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Doe",
    id: "1",
    skills: "Running, Cycling, Triathlon",
    url: {
      linkdlin: "https://plus.unsplash.com/",
      instagram: "https://plus.unsplash.com/",
      twitter: "https://plus.unsplash.com/",
    },
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export const Carosel = ({
  title,
  data,
}: {
  title: string;
  data?: IEvent[];
}) => {
  return (
    <div className="relative mt-12 z-1">
      <TopScroller/>
      <div className="flex justify-between items-center">
        <p className="text-xl">{title}</p>
        <Link href="/events-group/maratho">
          <Button asChild size="lg" variant="link">
            <p>View All</p>
          </Button>
        </Link>
      </div>

      <Carousel className="mt-4">
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem
              className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              key={index}
            >
              <EventCard {...item} title="Full Marathon" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
const Orb = () => (
  <div className="blur-[200px] absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
);
export default function Home() {
  return (
    <div className="px-main relative max-md:px-main-md">
      <Navbar />
      {/* orb */}
      <Orb />
      <div className="z-1 mt-12 relative">
        <h1 className="text-7xl font-medium md:w-[60%] max-md:text-3xl">
          Find, Train, and Compete in Events Around the World
        </h1>
        <div className="mt-10 relative flex flex-col-reverse gap-4 text-white/80 w-full">
          <div className="bg-secondary z-1 md:absolute top-0 right-0 max-md:w-full w-[44.5vw] p-6 rounded-xl md:rounded-4xl">
            <p className="text-2xl">
              From running races and triathlons to OCR, cycling, and functional
              fitness challenges, access everything you need to conquer your
              next goal.
            </p>
            <div className="mt-4 flex-wrap flex gap-4 items-center">
              <Button size="lg">Find Your Next Event</Button>
              <Button size="lg" variant="outline">
                View Result
              </Button>
              <Button size="lg" variant="outline">
                Hire a Coach
              </Button>
            </div>
          </div>
          <Image
            width={1000}
            height={500}
            className="hero-mask object-cover overflow-clip h-[50vw] w-full"
            alt="people running in marathon"
            src="https://plus.unsplash.com/premium_photo-1664304814099-adb3a3255e7a?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="mt-12 relative">
          <div className="blur-[200px] absolute top-0 left-[-12rem] bg-primary h-96 w-96 rounded-full" />
          <p className="text-5xl max-md:text-3xl">Explore popular events</p>
          <Carosel title={"Marathons Events"} data={MARATHON} />
          <Carosel title={"Hyrox Events"} data={MARATHON} />
          <Carosel title={"Duathlons Events"} data={MARATHON} />
          <Carosel title={"OCR Races"} data={MARATHON} />
        </div>
        <div className="bg-secondary mt-12 p-[4rem] -mx-[4rem]">
          <div className="flex justify-between items-center">
            <p className="text-5xl max-md:text-3xl">Our Expert Coaches</p>
            <Link href="/coaches-group/maratho">
              <Button asChild size="lg" variant="link">
                <p>View All</p>
              </Button>
            </Link>
          </div>
          <Carousel className="mt-8">
            <CarouselContent>
              {GYM_COACHES.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <CoachCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
