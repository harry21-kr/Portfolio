import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "../../ui/carousel";

const ZapankiMore = () => {
  return (
    <CarouselItem className="justify-evenly relative">
      <Image
        src="/gif/firecracker.gif"
        fill
        unoptimized
        alt=""
        className="absolute opacity-50 object-cover -z-10"
      />
      <motion.h2
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="font-semibold text-2xl"
      >
        그리고 더 많은 개발!
      </motion.h2>
      <motion.button
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="font-bold text-lg border px-2 py-1 rounded-sm hover:brightness-75 active:brightness-50"
      >
        <Link
          href="https://zapanki-frontend.vercel.app/"
          target="_blank"
          className="flex items-center gap-2"
        >
          <p>웹사이트 보러가기</p>
          <Image
            src="/images/zapanki_logo_round.png"
            width={20}
            height={20}
            alt=""
          />
        </Link>
      </motion.button>
    </CarouselItem>
  );
};

export default ZapankiMore;
