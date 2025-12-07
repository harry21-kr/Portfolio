"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AboutMe from "./AboutMe";
import AboutStack from "./AboutStack";

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center py-12">
      <h1 className="text-3xl font-semibold text-slate-500 pb-4">보유 역량</h1>
      <Carousel>
        <CarouselContent>
          <AboutStack />
          <AboutMe />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default AboutSection;
