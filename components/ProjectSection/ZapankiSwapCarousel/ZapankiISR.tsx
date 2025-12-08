import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "../../ui/carousel";

const ZapankiISR = () => {
  return (
    <CarouselItem className="justify-evenly">
      <motion.h2
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-semibold text-2xl"
      >
        ISR을 통한 빠른 랜딩페이지 로딩, SEO 최적화
      </motion.h2>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-lg flex flex-col items-center gap-1"
      >
        <p>랜딩 페이지에는 서버에서 가져와야하는 데이터와 함께</p>
        <p>웹사이트의 소개 등 중요한 정보들도 포함되어 있었습니다.</p>
        <p>CSR은 초기 로딩 속도와 SEO에 불리하여 사용하지 않았고,</p>
        <p>SSG는 데이터에 실시간성이 부여되지 않아 사용하지 않았으며,</p>
        <p>
          SSR은 ISR 대비 LCP, FCP에 불리한 방면이 있어 ISR을 사용하게
          되었습니다.
        </p>
      </motion.div>
      <motion.button
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
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

export default ZapankiISR;
