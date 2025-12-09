import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import ZapankiIntro from "./ZapankiIntro";
import ZapankiISR from "./ZapankiISR";
import ZapankiMore from "./ZapankiMore";
import ZapankiRTK from "./ZapankiRTK";
import ZapankiSocket from "./ZapankiSocket";

const ZapankiSwapCarousel = () => {
  return (
    <Carousel className="w-full">
      <Image
        src="/images/zapanki_standing.webp"
        fill
        alt=""
        className="opacity-10 object-contain"
      />
      <CarouselContent>
        <ZapankiIntro />
        <ZapankiISR />
        <ZapankiSocket />
        <ZapankiRTK />
        <ZapankiMore />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ZapankiSwapCarousel;
