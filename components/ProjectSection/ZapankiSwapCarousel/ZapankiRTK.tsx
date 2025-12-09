import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "../../ui/carousel";

const ZapankiRTK = () => {
  return (
    <CarouselItem className="justify-center gap-4 px-2 sm:gap-8 sm:px-0">
      <motion.h2
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-semibold text-[clamp(1.125rem,2.5vw,1.5rem)]"
      >
        Redux Toolkit을 사용한 전역 변수 관리
      </motion.h2>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-[clamp(1rem,2.5vw,1.125rem)] flex flex-col sm:items-center sm:gap-1"
      >
        <p>여러 페이지에서 동일하게 사용되는 변수들을 관리하기 위해</p>
        <p>RTK를 사용하였고, createSelector와 useMemo를 사용해</p>
        <p>하나의 selector로 여러 전역 변수를 가져옴과 동시에</p>
        <p>캐싱을 진행해 메모리를 효과적으로 사용하였습니다.</p>
      </motion.div>
      <motion.button
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="font-bold text-lg border px-2 py-1 rounded-sm hover:brightness-75 active:brightness-50"
      >
        <Link
          href="https://github.com/harry21-kr/Portfolio-Demo/tree/main/ZapankiSwap/RTK"
          target="_blank"
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
