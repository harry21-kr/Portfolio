import { motion } from "motion/react";
import Image from "next/image";
import { CarouselItem } from "../ui/carousel";

const AboutStack = () => {
  return (
    <CarouselItem>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-bold text-3xl pb-8"
      >
        실무에 최적화되어있는 기술 스택
      </motion.h2>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center gap-4 pb-4"
      >
        <Image src="/svg/javascript_logo.svg" width={100} height={100} alt="" />
        <Image src="/svg/react_logo.svg" width={100} height={100} alt="" />
        <Image src="/svg/nextjs_logo.svg" width={100} height={100} alt="" />
      </motion.div>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-xl pb-8"
      >
        <p>현 시점 웹 프론트엔드 개발에서 가장 많이 사용되고 있는</p>
        <p>라이브러리, 프레임워크를 능숙하게 활용할 수 있습니다.</p>
      </motion.div>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
        className="flex justify-center gap-4 pb-4"
      >
        <Image src="/svg/github_logo.svg" width={100} height={100} alt="" />
        <Image src="/svg/jira_logo.svg" width={100} height={100} alt="" />
        <div className="w-[100px] h-[100px] relative">
          <Image src="/svg/figma_logo.svg" fill alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-xl"
      >
        <p>또한 실무에서 사용되는 다양한 협업 도구를 사용한 경험을 바탕으로</p>
        <p>기획자, 디자이너, 개발자님과 원활한 소통을 진행할 수 있습니다.</p>
      </motion.div>
    </CarouselItem>
  );
};

export default AboutStack;
