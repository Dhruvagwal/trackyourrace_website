import React from 'react'
import Navbar from "@/components/main/navbar";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { communityGroups } from '@/data/community';
import HeroSection from '@/components/main/hero';
import { CommunityGroup } from '@/types';


const OrbRight = () => (
    <div className="blur-[200px] z-10 absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
);

const OrbLeft = () => (
    <div className="blur-[200px] z-10 absolute top-[0] left-[-12rem] bg-primary h-96 w-96 rounded-full" />
);

const CommunityCard: React.FC<{ data: CommunityGroup }> = ({ data }) => {
    return (
        <div className="space-y-6 relative z-20">
            <h3 className="text-3xl font-medium">
                {data.title}
                {data.expansion && <span className="font-normal text-base">{`(${data?.expansion})`}</span>}
            </h3>
            <div className="relative rounded-2xl p-6 flex flex-col justify-end overflow-hidden min-h-[798px] max-md:min-h-[500px] max-sm:min-h-[400px]">
                <div className="absolute z-20 inset-0 bg-gradient-to-b from-transparent to-black"></div>

                <Image
                    src={data.imgSrc}
                    width={600}
                    height={798}
                    alt={data.title}
                    className="absolute inset-0 z-10 w-full h-full object-cover"
                />

                <div className="relative z-30 space-y-6 max-md:space-y-4">
                    <div className="space-y-4 max-md:space-y-2">
                        <h4 className="text-2xl font-medium max-md:text-xl">
                            {data.subtitle}
                        </h4>
                        <p className="text-base font-normal max-md:text-sm">
                            {data.description}
                        </p>
                        <Button
                            size={'lg'}
                            variant={'outline'}
                            className="max-md:w-full"
                            style={{ border: "1px solid #29AA95" }}
                        >
                            {data.ctaBtnTitle}
                        </Button>
                    </div>

                    <div className="space-y-4 max-md:space-y-2">
                        <h4 className="text-2xl font-medium max-md:text-xl">
                            Trending Discussions:
                        </h4>
                        <ul className="space-y-2">
                            {data.trendingDiscussions.map((item: string, index: number) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Image src={'/green-check.svg'} width={16} height={16} alt='greencheck' />
                                    <span className="max-md:text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


const CommunityPage = () => {
    return (
        <div className="px-main relative max-md:px-main-md space-y-12">
            <Navbar />
            <OrbRight />

            <HeroSection
                title="Find Your Tribe. Train Smarter. Compete Stronger"
                description="Connect with athletes who share your passion. Whether you're a duathlon newcomer, a seasoned OCR racer, or a cycling enthusiast, there's a community for you."
                bgImage="/community/community-hero.png"
                ctaFilledContent="Join a Community"
                ctaOutlineContent="Start a Discussion"
            />


            {/* Community Section */}
            <section className="relative space-y-12">
                <OrbLeft />
                <div className="space-y-6 w-full relative z-20 text-center md:text-left">
                    <h1 className="text-4xl md:text-7xl font-medium">
                        {"Connect. Train. Compete."}
                    </h1>
                    <p className="text-base md:w-[75%] mx-auto md:mx-0 md:text-right">
                        {"Find your tribe! Whether you’re a duathlon newcomer, a seasoned OCR racer, or a cycling enthusiast, this is where athletes come together to share experiences, exchange advice, and grow stronger—together."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {communityGroups.map((community: CommunityGroup, index: number) => (
                        <CommunityCard data={community} key={index} />
                    ))}
                </div>
            </section>

        </div>
    )
}

export default CommunityPage