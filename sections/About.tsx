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
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="About Me"
          sectionName="A Glimpse of me"
          description="Know More about Who I am, What I do!"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 gap-8">
            <Card classname="h-[320px] p-0 md:col-span-2">
              <div>
                <CardHeader
                  title="My Tech Stack"
                  description=" Explore the techs I used to craft digital experiences."
                  classname="px-6 pt-6"
                />
                <LanguageItems languages={languages} classname="mt-6" />
                <LanguageItems
                  languages={languages}
                  classname="mt-6 -translate-x-1/2"
                />
              </div>
            </Card>
            <Card classname="md:col-span-3">
              <div>
                <CardHeader
                  title="Library & Frameworks"
                  description="Explore How I use modern technologies to scale performances of
                the applications."
                />
                <div className="grid grid-cols-3 gap-4">
                  {tools.map((tool) => (
                    <div
                      key={tool.title}
                      className="inline-flex items-center bg-gradient-to-r from-blue-300 to-indigo-400 h-12 px-6 py-1.5 rounded-xl gap-2"
                    >
                      <TechIcon component={tool.iconName} />
                      <span className="font-medium text-gray-950">
                        {tool.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <Card classname="h-[320px] md:col-span-3">
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
            <Card classname="h-[320px] md:col-span-2">
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
