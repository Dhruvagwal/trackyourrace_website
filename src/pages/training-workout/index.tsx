import React, { useRef } from 'react'
import Navbar from '@/components/main/navbar';
import HeroSection from '@/components/main/hero'
import { TrainingVideo, TraningPlans, TraningPlanVideos } from '@/types';
import Image from 'next/image';
import { trainingplans, trainingPlanVideos } from '@/data/trainingPlans';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const OrbRight = () => (
    <div className="blur-[200px] z-10 absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
);

const OrbLeft = () => (
    <div className="blur-[200px] z-10 absolute top-[0] left-[-12rem] bg-primary h-96 w-96 rounded-full" />
);

const TrainingPlanCard: React.FC<{ data: TraningPlans }> = ({ data }) => {
    return (
        <div className='space-y-4'>
            <div className='relative h-[520px] rounded-2xl overflow-hidden'>
                <Image
                    src={data.imgSrc}
                    alt={data.title}
                    width={600}
                    height={520}
                    className="absolute inset-0 z-10 w-full h-full object-cover"
                />
                <div className="absolute z-20 inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <h4 className="text-2xl font-medium max-md:text-xl">{data.title}</h4>
            <p className="text-base font-normal max-md:text-sm">{data.description}</p>
        </div>
    )
}

const TrainingVideoSwiperComponent: React.FC<{ data: TraningPlanVideos[] }> = ({ data }) => {
    return (
        <section className="space-y-20">
            {data.map((plan, index) => {
                const swiperRef = useRef<any>(null); // Individual ref for each Swiper

                return (
                    <div key={index} className="overflow-hidden space-y-10 rounded-2xl w-full">
                        {/* Title & Navigation */}
                        <div className="flex flex-row justify-between items-center">
                            <h4 className="text-2xl font-medium text-left">{plan.title}</h4>
                            <div className="flex flex-row gap-4 items-center">
                                <button
                                    className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-primary text-white border border-solid border-white cursor-pointer"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <ChevronLeft size={24} color="white" />
                                </button>
                                <button
                                    className="rounded-full w-[40px] h-[40px] flex justify-center items-center text-primary bg-transparent border border-solid border-white cursor-pointer"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Swiper Carousel */}
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={1}
                            onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign individual ref
                            breakpoints={{
                                480: { slidesPerView: 1, spaceBetween: 10 },
                                640: { slidesPerView: 1.5, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 }
                            }}
                            className="w-full"
                        >
                            {plan.videos.map((video, videoIndex) => (
                                <SwiperSlide key={videoIndex} className="!w-[400px]">
                                    <div className="h-[400px] w-[400px] relative rounded-2xl overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={video.thumbnail}
                                            alt={`${plan.title}-${videoIndex}`}
                                            width={400}
                                            height={400}
                                            className="absolute inset-0 w-full h-full object-cover z-10 brightness-75"
                                        />
                                        <Image
                                            src={'/playBtn.svg'}
                                            alt={`Play-${plan.title}-${videoIndex}`}
                                            width={56}
                                            height={56}
                                            className="z-20 relative"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                );
            })}
        </section>
    );
};



const TrainingAndWorkout = () => {
    return (
        <section>
            <div className="px-main relative max-md:px-main-md space-y-20">
                <Navbar />
                <OrbRight />

                <HeroSection
                    title="Train Smarter. Perform Better."
                    description="Optimize your training for any event type—strengthen your run, refine your cycling cadence, nail OCR techniques, or build Hyrox-ready functional fitness."
                    bgImage="/community/community-hero.png"
                    ctaFilledContent="Start a Training Plan"
                    ctaOutlineContent="Consult a Coach"
                />

                <section className='space-y-8'>
                    <div className='flex w-full flex-row justify-between'>
                        <h1 className='font-medium text-5xl text-left flex-1'>
                            {"Trending Training Plans"}
                        </h1>
                        <p className='font-normal text-base text-left flex-1'>
                            {"Created by experts for diverse events: 5K speed plans, OCR grip strength circuits, cycling power-building routines, and more."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {trainingplans.map((data: TraningPlans, index: number) => (
                            <TrainingPlanCard data={data} key={index} />
                        ))}
                    </div>
                </section>

                <section className="space-y-8">
                    <div className='flex w-full flex-row justify-between'>
                        <h1 className='font-medium text-5xl text-left flex-2'>
                            {"Video Tutorials & Guides"}
                        </h1>
                        <p className='font-normal text-base text-left flex-1'>
                            {"Learn proper technique for obstacles, transitions, functional fitness movements, and more."}
                        </p>
                    </div>

                    <TrainingVideoSwiperComponent data={trainingPlanVideos} />
                </section>
            </div>
        </section>
    )
}

export default TrainingAndWorkout;
