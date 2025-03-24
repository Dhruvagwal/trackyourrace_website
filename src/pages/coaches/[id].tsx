import React from "react";
import Navbar from "@/components/main/navbar";
import Image from "next/image";
import { GYM_COACHES } from "..";
import { Button } from "@/components/ui/button";
import { Check, Instagram, Linkedin, Twitter } from "lucide-react";
import { MarqueeDemo } from "@/components/main/review";
import TopScroller from "@/registry/toTop";

function Coaches() {
  const coach = GYM_COACHES[0];
  return (
    <div className="px-main relative max-md:px-main-md">
      <Navbar />
      <TopScroller/>
      <div className="blur-[200px] absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
      <div className="z-1 relative">
        <Image
          width={1000}
          height={500}
          className="rounded-3xl w-full h-[50vh]"
          alt="Track"
          src="https://images.unsplash.com/photo-1528900398979-99eb5b7f057d?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="flex flex-wrap items-center max-md:justify-center gap-4 justify-between">
          <div className="flex flex-wrap items-center max-md:justify-center md:items-end gap-4 mt-[-4rem]">
            <Image
              width={500}
              height={500}
              className="rounded-full object-cover w-56 h-56"
              alt="Coach"
              src={coach.image}
            />
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-semibold">{coach.name}</p>
              <p>{coach.skills}</p>
              <div className="flex items-center max-md:justify-center gap-2">
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
          <Button size="lg">Hire Now</Button>
        </div>
      </div>
      <div className="md:grid grid-cols-3 gap-4 mt-12">
        <div className="bg-secondary p-8 col-span-2 rounded-xl">
          <p className="text-3xl">About Me</p>
          <p className="mt-4">
            Daniel Johnson is a dedicated and experienced Endurance Running, OCR
            Technique, Cycling Performance coach, passionate about helping
            athletes push their limits and achieve their race goals. With 10
            years of experience he has guided runners, cyclists, and OCR
            athletes to personal bests, podium finishes, and first-time race
            completions. “My mission is to help every athlete, whether a weekend
            warrior or a seasoned competitor, unlock their full potential. I
            focus on structured training, mental resilience, and smart race
            strategies to ensure peak performance on race day.”
          </p>
          <br />
          <hr />
          <br />
          <p className="text-3xl">Training Philosophy</p>
          <p className="mt-4">
            I believe that every athlete has unique strengths, weaknesses, and
            goals. My approach is fully personalized, integrating structured
            workouts, mobility drills, nutrition guidance, and mental coaching.
            Whether you’re preparing for your first race or breaking into elite
            competition, my goal is to ensure you train smarter, not just
            harder.
            <br />
            <br />
            <span className="flex items-center gap-2">
              <Check className="bg-green-500 rounded" />
              Customized Plans – Tailored workouts based on your goals, fitness
              level, and race schedule
            </span>
            <br />
            <span className="flex items-center gap-2">
              <Check className="bg-green-500 rounded" />
              Data-Driven Coaching – Heart rate, power meters, and pacing
              analysis for maximum efficiency
            </span>
            <br />
            <span className="flex items-center gap-2">
              <Check className="bg-green-500 rounded" />
              Injury Prevention – Smart programming to build strength,
              flexibility, and endurance
            </span>
            <br />
            <span className="flex items-center gap-2">
              <Check className="bg-green-500 rounded" />
              Race Strategy & Mindset – Confidence-building techniques for peak
              performance
            </span>
          </p>
          <br />
          <hr />
          <br />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <p className="text-3xl mb-2">Expertise</p>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Marathon Coaching
              </span>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Endurance Training
              </span>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Speed & Interval Training
              </span>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Sports Nutrition & Recovery
              </span>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Mental Toughness
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-3xl mb-2">Credentials</p>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Certified Running Coach: USATF or RRCA
              </span>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Certified Strength & Conditioning Specialist
              </span>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Sports Nutrition Specialist
              </span>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Personal Best: Include trainer’s achievement
              </span>
              <span className="flex items-center gap-2">
                <Check className="bg-accent w-6 h-6 p-1 rounded" />
                Over 500+ Athletes Trained
              </span>
            </div>
          </div>
        </div>

        <div className="bg-secondary grid grid-cols-2 gap-8 p-8 col-span-1 h-fit rounded-xl">
          <div>
            <p className="text-3xl">125+</p>
            <p>Events</p>
          </div>
          <div>
            <p className="text-3xl">1125+</p>
            <p>Active Students</p>
          </div>
          <div>
            <p className="text-3xl">10+</p>
            <p>Year Expertise</p>
          </div>
          <div>
            <p className="text-3xl">80+</p>
            <p>Medal Achieve</p>
          </div>
        </div>
      </div>
      <MarqueeDemo/>
    </div>
  );
}

export default Coaches;
