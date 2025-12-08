import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "../../ui/carousel";

const ZapankiSocket = () => {
  return (
    <CarouselItem className="justify-evenly gap-4">
      <motion.h2
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-semibold text-2xl"
      >
        Socket.io를 통한 실시간 게임 정보 공유
      </motion.h2>
      <motion.div
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-lg flex flex-col items-center gap-1"
      >
        <p>게임의 결과는 모든 유저에게 실시간으로 공유되어야 했습니다.</p>
        <p>
          이를 위해 서버와 WebSocket을 통한 실시간 통신이 필요하다고 판단했으며,
        </p>
        <p>Socket.io 라이브러리를 활용해 이 기능을 구현했습니다.</p>
        <p>또한 React의 useCallback과 useEffect를 사용해</p>
        <p>상태 관리와 이벤트 처리 로직을 최적화하였습니다.</p>
      </motion.div>
      <motion.button
        initial={{ translateX: -10, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="font-bold text-lg border px-2 py-1 rounded-sm hover:brightness-75 active:brightness-50"
      >
        <Link
          href="https://github.com/harry21-kr/Portfolio-Demo/tree/main/ZapankiSwap/Socket"
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

export default ZapankiSocket;
