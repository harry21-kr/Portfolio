import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "../../ui/carousel";

const ZapankiIntro = () => {
  return (
    <CarouselItem className="gap-8">
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2 text-xl"
      >
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-3xl pb-2">ZapankiSwap</h2>
          <Link href="https://zapanki-frontend.vercel.app/" target="blank">
            <Image src="/svg/external_link.svg" width={20} height={20} alt="" />
          </Link>
        </div>
        <h3 className="font-bold text-2xl">
          블록체인 기반 WEB3 웹게임 프로젝트
        </h3>
        <p>개발 기간: 2023.01 ~ 2024.04</p>
        <p>핵심 기술: Next.js, SWR, RTK, Socket.io</p>
      </motion.div>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 text-xl font-semibold"
      >
        <p className="mx-auto pb-1">목차</p>
        <p>1. ISR 사용 사례</p>
        <p>2. Socket.io 사용 사례</p>
        <p>3. Redux Toolkit 사용 사례</p>
        <p>4. Framer Motion 사용 사례</p>
      </motion.div>
    </CarouselItem>
  );
};

export default ZapankiIntro;
