import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
    title: string;
    description: string;
    bgImage: string;
    ctaFilledContent: string;
    ctaOutlineContent: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, bgImage, ctaFilledContent, ctaOutlineContent }) => {
    return (
        <section className="overflow-hidden rounded-3xl flex flex-col justify-end md:flex-row md:items-center md:justify-center px-6 py-2 md:px-24 relative z-20 min-h-[526px] text-center md:text-left">
            <Image
                src={bgImage}
                alt="hero-background"
                width={1428}
                height={526}
                className="absolute inset-0 z-10 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute z-20 inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent to-black"></div>

            <div className="relative z-30 space-y-8 md:space-y-12 w-full">
                <div className="space-y-4 md:space-y-6">
                    <h1 className="text-4xl md:text-7xl md:w-[93%] font-semibold">
                        {title}
                    </h1>
                    <p className="text-base md:text-lg md:w-[65%] mx-auto md:mx-0">
                        {description}
                    </p>
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
                    <Button size="lg">
                        {ctaFilledContent}
                    </Button>
                    <Button size="lg" variant="outline">
                        {ctaOutlineContent}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
