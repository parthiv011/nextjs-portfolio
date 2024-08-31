import { TechIcon } from "@/components/About/TechIcon";
import { Card } from "@/components/shared/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { languages } from "@/utils/languages";
import { tools } from "@/utils/tools";

import ArrowUpRight from "@/public/Icon/arrow-up-right.svg";
import { LanguageItems } from "@/components/About/LanguageItems";
import { CardHeader } from "@/components/shared/CardHeader";

export const About = () => {
  return (
    <section id="about" className="py-16 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          sectionName="A Glimpse of me"
          description="Know More about Who I am, What I do!"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] p-0 md:col-span-2">
              <div>
                <CardHeader
                  title="My Tech Stack"
                  description=" Explore the techs I used to craft digital experiences."
                  classname="px-6 pt-6 md:px-10 md:py-8"
                />
                <LanguageItems languages={languages} classname="mt-6 md:mt-0" />
                <LanguageItems
                  languages={languages}
                  classname="mt-6 -translate-x-1/2"
                />
              </div>
            </Card>
            <Card className="h-[420px] p-0 md:col-span-3 flex flex-col">
              <CardHeader
                title="Library & Frameworks"
                description="Explore How I use modern technologies to scale performances of
                the applications."
                classname="px-6 py-6 md:px-10 md:py-8"
              />
              <div className="relative flex-1">
                {tools.map((tool) => (
                  <div
                    key={tool.title}
                    className="inline-flex items-center bg-gradient-to-r from-blue-300 to-indigo-400 h-12 px-6 py-2 rounded-md gap-2 absolute"
                    style={{
                      top: tool.top,
                      left: tool.left,
                    }}
                  >
                    <TechIcon component={tool.iconName} />
                    <span className="font-medium text-gray-950">
                      {tool.title}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-fit md:col-span-3 px-6">
              <div>
                <CardHeader
                  title="Beginner’s Guide: How to handle two or more Github accounts on
                same machine!"
                  description="You might have heard students or developers saying that the
                project successfully runs on my machine but I don’t know why it
                gives error on your machine."
                />
                <div className="flex flex-col">
                  <a href="https://medium.com/@parmarparthiv77/beginners-guide-how-to-use-docker-for-web-developers-50e7611d1d64">
                    <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto px-6 items-center justify-center font-semibold gap-2 mt-8 inline-flex">
                      <span>Read Blog</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
              </div>
            </Card>
            <Card className="h-fit md:col-span-2 px-6">
              <div>
                <CardHeader
                  title="Beginner’s Guide: How to use Docker for Web developers?"
                  description="You might have heard students or developers saying that the
                project successfully runs on my machine but I don’t know why it
                gives error on your machine."
                />
                <div className="flex flex-col">
                  <a href="https://medium.com/@parmarparthiv77/beginners-guide-how-to-use-docker-for-web-developers-50e7611d1d64">
                    <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto px-6 items-center justify-center font-semibold gap-2 mt-8 inline-flex">
                      <span>Read Blog</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
