import { motion } from "motion/react";
import { CarouselItem } from "../ui/carousel";

const AboutMe = () => {
  return (
    <CarouselItem className="justify-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-bold text-[clamp(1.5rem,4vw,1.875rem)] pb-2 sm:pb-4"
      >
        주도적인 개발을 통한 프로젝트 기여
      </motion.h2>
      <motion.p
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-[clamp(1rem,2.5vw,1.25rem)] pb-8"
      >
        주어진 것 이외에도 더 많은 것을 수행하고자 노력합니다. 기여한 프로젝트를
        기반으로 한 회사가 설립되는 과정에 참여하였으며 주도적인 참여가
        프로젝트의 성공을 이끈다는 것을 느꼈습니다.
      </motion.p>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="font-bold text-[clamp(1.5rem,4vw,1.875rem)] pb-2 sm:pb-4"
      >
        다양한 경험을 통한 실무 적응 능력
      </motion.h2>
      <motion.p
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
        className="text-center text-[clamp(1rem,2.5vw,1.25rem)]"
      >
        다양한 환경에서 쌓은 경험으로 실무에 빠르게 적응합니다. 개인
        프로젝트에서는 어떻게 잘 만드는지 익혔고, 팀 프로젝트에서는 효과적인
        소통 방식을 배웠으며, 인턴십에서는 실제 업무 흐름을 이해하였습니다.
        이러한 배경으로 실무에서도 빠르게 적응할 수 있습니다.
      </motion.p>
    </CarouselItem>
  );
};

export default AboutMe;
