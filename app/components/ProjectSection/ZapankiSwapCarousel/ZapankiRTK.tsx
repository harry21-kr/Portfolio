import { CarouselItem } from "@/components/ui/carousel";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ZapankiRTK = () => {
  return (
    <CarouselItem className="justify-evenly gap-4">
      <motion.h2
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="font-semibold text-2xl"
      >
        Redux Toolkit을 사용한 전역 변수 관리
      </motion.h2>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-lg flex flex-col items-center gap-1"
      >
        <p>RTK의</p>
      </motion.div>
      <motion.button
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
        className="font-bold text-lg border px-2 py-1 rounded-sm hover:brightness-75 active:brightness-50"
      >
        <Link
          href="https://github.com/harry21-kr/Portfolio-Demo/blob/main/ZapankiSwap/ISR/ISR.tsx"
          target="blank"
          className="flex items-center gap-2"
        >
          <p>코드 보러가기</p>
          <Image src="/svg/github_logo.svg" width={20} height={20} alt="" />
        </Link>
      </motion.button>
    </CarouselItem>
  );
};

export default ZapankiRTK;
