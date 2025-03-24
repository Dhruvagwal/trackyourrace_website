import React from "react";
import Navbar from "@/components/main/navbar";
import Image from "next/image";
import { Map } from "lucide-react";
import { Carosel, GYM_COACHES, MARATHON } from "..";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import CoachCard from "@/components/main/coach-card";
import TopScroller from "@/registry/toTop";

function Events() {
  return (
    <div className=" relative">
      <div className="max-md:px-main-md px-main">
        <Navbar />
        <TopScroller/>
      </div>
      <div className="blur-[200px] absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
      <div className="z-1 relative">
        <Image
          className="object-cover h-[50vh] w-full rounded-3xl"
          width={1500}
          height={500}
          alt="event"
          src="https://images.unsplash.com/photo-1596460658047-1826d5921c56?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className="px-main relative z-1  max-md:px-main-md">
          {/* Highlights */}
          <div className="bg-secondary grid md:flex items-center w-fit mx-auto gap-4 md:gap-16 p-8 rounded-2xl mt-[-3rem]">
            <h1 className="font-medium text-3xl">Spring Marathon 2025</h1>
            <div className="flex items-center gap-2">
              <Map className="text-white/20" />
              <span>Malta, Valletta</span>
            </div>
          </div>
          <div className="grid mt-12 md:grid-cols-2">
            <div>
              <div>
                <p className="text-xl font-semibold">Course Map:</p>
                <div className="p-4 text-white/80">
                  <p>1. Start and Finish points</p>
                  <p>2. Milestones (e.g., 5K, 10K markers)</p>
                  <p>3. Hydration stations</p>
                  <p>4. Restrooms</p>
                  <p>5. Medical aid spots</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Obstacle & Station Details:
                </p>
                <p className="text-white/80">
                  Experience a series of challenging obstacles and fitness
                  stations inspired by OCR, Hyrox, and Functional Fitness
                  events.
                </p>
                <div className="p-4 text-white/80">
                  <p>
                    3. OCR Challenges: Walls, rope climbs, monkey bars, mud
                    pits, and more.
                  </p>
                  <p>
                    4. Hyrox Stations: Sled push/pull, rowing, burpees, farmer&apos;s
                    carry, and running.
                  </p>
                  <p>
                    5. Functional Fitness Tests: Heavy carries, box jumps,
                    sandbag lifts, and kettlebell swings.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold">Key Highlights:</p>
                <div className="p-4 text-white/80">
                  <p>2. Mile 3: Scenic views of Strawberry Fields.</p>
                  <p>3. Mile 7: Live music zone with cheering crowds.</p>
                  <p>4. Mile 10: Photo booth for runners.</p>
                  <p>5. Final Stretch: Iconic city skyline in view</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Pro Tips from Participants::
                </p>
                <div className="p-4 text-white/80">
                  <p>
                    1. Train for endurance—this race is as much about stamina as
                    it is about strength.
                  </p>
                  <p>
                    2. Master grip strength—for obstacles that require climbing
                    or hanging.
                  </p>
                  <p>3. Pace yourself—don&apos;t burn out too soon!</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="bg-secondary rounded-xl p-8 h-fit px-12">
                <p className="text-xl font-bold">Registration Details:</p>
                <div className="text-xl mt-4">
                  <p className="grid grid-cols-2 gap-16 items-center">
                    <span className="text-base text-white/50">
                      Registration fee:{" "}
                    </span>{" "}
                    € 50
                  </p>
                  <p className="grid grid-cols-2 gap-16 items-center">
                    <span className="text-base text-white/50">Deadline:</span>{" "}
                    April 7, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-[4rem] -mx-[4rem]">
            <div className="flex justify-between items-center">
              <p className="text-5xl max-md:text-3xl">Hire a Coach</p>
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

            <div className="mt-12">
              <div>
                <p className="text-xl font-semibold">Overview:</p>
                <div className="p-4 text-white/80">
                  <p>1. Plan description and objectives.</p>
                  <p>
                    2. Visual timeline with milestones (e.g., “Week 4: Run 10K
                    comfortably”).
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold">Daily Workouts:</p>
                <div className="p-4 text-white/80">
                  <p>1. Type: Long run, interval, cross-training, or rest.</p>
                  <p>
                    2. Time/distance: E.g., &ldquo;Run for 45 minutes at a moderate
                    pace.&ldquo;
                  </p>
                  <p>3. Video tutorials for warm-ups/cool-downs.</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold">Achievement Badges:</p>
                <div className="p-4 text-white/80">
                  <p>
                    1. Gamify the plan by rewarding milestones (e.g., “First 10K
                    Completed!”).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Carosel title={"Upcoming Events"} data={MARATHON} />
        </div>
      </div>
    </div>
  );
}

export default Events;
