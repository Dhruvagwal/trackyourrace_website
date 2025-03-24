import React from 'react'
import Navbar from '@/components/main/navbar';
import HeroSection from '@/components/main/hero'


const OrbRight = () => (
    <div className="blur-[200px] z-10 absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
);

const OrbLeft = () => (
    <div className="blur-[200px] z-10 absolute top-[0] left-[-12rem] bg-primary h-96 w-96 rounded-full" />
);

const TrainingAndWorkout = () => {

    return (
        <section>
            <div className="px-main relative max-md:px-main-md space-y-12">
                <Navbar />
                <OrbRight />

                <HeroSection
                    title="Train Smarter. Perform Better."
                    description="Optimize your training for any event type—strengthen your run, refine your cycling cadence, nail OCR techniques, or build Hyrox-ready functional fitness."
                    bgImage="/community/community-hero.png"
                    ctaFilledContent="Start a Training Plan"
                    ctaOutlineContent="Consult a Coach"
                />


                <section>
                    <div className='flex w-full flex-row justify-between'>
                        <h1 className='font-medium text-5xl text-left flex-1'>
                            {"Trending Training Plans"}
                        </h1>
                        <p className='font-normal text-base text-right flex-1'>
                            {"Created by experts for diverse events: 5K speed plans, OCR grip strength circuits, cycling power-building routines, and more."}
                        </p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default TrainingAndWorkout