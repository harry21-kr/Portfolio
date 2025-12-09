import { motion } from "motion/react";

const IntroSection = () => {
  return (
    <section className="h-screen pb-12 flex flex-col justify-center gap-10 sm:gap-20">
      <motion.div
        animate={{ opacity: [0, 1] }}
        className="flex flex-col text-[clamp(2rem,8vw,3rem)]"
      >
        <p>안녕하세요.</p>
        <p className="font-semibold">프론트엔드 개발자</p>
        <p className="font-bold">박원빈입니다.</p>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 1 }}
        className="flex flex-col text-[clamp(1rem,2.5vw,1.25rem)] break-keep sm:gap-2 sm:items-end"
      >
        <p>
          <span className="font-semibold">무언가</span>가 없다면{" "}
          <span className="font-semibold">어떻게</span>도 나올 수 없지만,
        </p>
        <p>
          <span className="font-semibold">어떻게</span>가 없다면{" "}
          <span className="font-semibold">무언가</span>를 만들 수 없습니다.
        </p>
        <p>무엇을 어떻게 만들것인지 항상 생각하는 개발자 박원빈입니다.</p>
        <p>제 포트폴리오 웹사이트에 방문해주셔서 감사드립니다.</p>
      </motion.div>
    </section>
  );
};

export default IntroSection;
