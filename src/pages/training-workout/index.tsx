import React from 'react'
import Navbar from '@/components/main/navbar';
import HeroSection from '@/components/main/hero'
import { TraningPlans } from '@/types';
import Image from 'next/image';
import trainingplans from '@/data/trainingPlans';


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
                <Image src={data.imgSrc} alt={data.title} width={600} height={520}
                    className="absolute inset-0 z-10 w-full h-full object-cover"

                />
                <div className="absolute z-20 inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>


            <h4 className="text-2xl font-medium max-md:text-xl">
                {data.title}
            </h4>
            <p className="text-base font-normal max-md:text-sm">
                {data.description}
            </p>
        </div>
    )
}

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
                        <p className='font-normal text-base text-right flex-1'>
                            {"Created by experts for diverse events: 5K speed plans, OCR grip strength circuits, cycling power-building routines, and more."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {
                            trainingplans.map((data: TraningPlans, index: number) => (
                                <TrainingPlanCard data={data} key={index} />
                            ))
                        }
                    </div>
                </section>


            </div>
        </section>
    )
}

export default TrainingAndWorkout