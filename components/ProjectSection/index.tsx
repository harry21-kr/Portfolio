import ZapankiSwapCarousel from "./ZapankiSwapCarousel";

const ProjectSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-[clamp(1.5rem,5vw,1.875rem)] font-semibold text-slate-500 sm:pb-4">
        프로젝트 개발 사례
      </h1>
      <ZapankiSwapCarousel />
    </section>
  );
};

export default ProjectSection;
