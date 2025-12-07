import ZapankiSwapCarousel from "./ZapankiSwapCarousel";

const ProjectSection = () => {
  return (
    <section className="flex flex-col py-12 items-center">
      <h1 className="text-3xl font-semibold text-slate-500 pb-4">
        프로젝트 개발 사례
      </h1>
      <ZapankiSwapCarousel />
    </section>
  );
};

export default ProjectSection;
