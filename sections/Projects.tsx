import saasImage from "@/public/payX.png";
import CheckIcon from "@/public/Icon/check-circle.svg";
import ArrowUpRight from "@/public/Icon/arrow-up-right.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/shared/Card";

const projects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "BookIt.com",
    results: [
      { title: "Styled Components" },
      { title: "React Hook form" },
      { title: "Tanstack Query" },
    ],
    link: "https://github.com/parthiv",
    image: saasImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "BookIt.com-backend",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://github.com/parthiv",
    image: saasImage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "PaymentX",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/parthiv",
    image: saasImage,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Real World results"
          sectionName="Featured Projects"
          description="See How I transformed my skills into digital experiences"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="sticky top-0 px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16 relative z-10">
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 font-bold text-sm uppercase tracking-widest text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl mt-2 md:text-3xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    className="relative z-20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto px-6 items-center justify-center font-semibold gap-2 mt-8 inline-flex">
                      <span>Visit Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
