import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { RefObject, useEffect, useState } from "react";

interface BottomNavProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

const BottomNav = ({ containerRef }: BottomNavProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        setIsOpen(false);
        setScrollProgress(self.progress);
      },
    });
  }, [containerRef]);

  return (
    <motion.button
      onClick={() => setIsOpen(true)}
      animate={
        !isOpen && scrollProgress > 0 && scrollProgress < 1
          ? {
              paddingLeft: 20,
              paddingRight: 20,
            }
          : { paddingLeft: 48, paddingRight: 48 }
      }
      whileTap={{ opacity: 0.5 }}
      whileHover={{ opacity: 0.75 }}
      className="nav_container fixed bottom-4 left-1/2 -translate-x-1/2 border rounded-full px-12 overflow-hidden h-10 bg-background/30 backdrop-blur-[10px]"
    >
      <motion.div
        animate={{
          translateY: `${Math.floor(scrollProgress * 3) * -100}%`,
        }}
        className="h-full font-bold text-lg"
      >
        <p className="h-full flex justify-center items-center">인사말</p>
        <p className="h-full flex justify-center items-center">보유 역량</p>
        <p className="h-full flex justify-center items-center">
          프로젝트 개발 사례
        </p>
        <p className="h-full flex justify-center items-center">감사합니다.</p>
      </motion.div>
    </motion.button>
  );
};

export default BottomNav;
