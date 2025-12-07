import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ZapankiIntro from "./ZapankiIntro";
import ZapankiISR from "./ZapankiISR";
import ZapankiMotion from "./ZapankiMotion";
import ZapankiRTK from "./ZapankiRTK";
import ZapankiSocket from "./ZapankiSocket";

const ZapankiSwapCarousel = () => {
  return (
    <Carousel>
      <Image
        src="/images/zapanki_standing.webp"
        fill
        objectFit="contain"
        alt=""
        className="opacity-10"
      />
      <CarouselContent>
        <ZapankiIntro />
        <ZapankiISR />
        <ZapankiSocket />
        <ZapankiRTK />
        <ZapankiMotion />
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default ZapankiSwapCarousel;
