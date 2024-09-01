"use client";

import Image from "next/image";
import ArrowDown from "@/public/Icon/arrow-down.svg";
import grainImg from "@/public/grain.jpg";
import StarIcon from "@/public/Icon/star.svg";
import SparkleIcon from "@/public/Icon/sparkle.svg";
import { HeroOrbit } from "@/components/shared/HeroOrbit";

export const HeroSection = () => {
  function onClickHandler() {
    const element = document.getElementById("projects");
    // console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  }
  function onClickHandler2() {
    const element = document.getElementById("contact");
    // console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImg.src})` }}
        ></div>
        <div className="w-[620px] h-[620px] hero-ring"></div>
        <div className="w-[820px] h-[820px] hero-ring"></div>
        <div className="w-[1020px] h-[1020px] hero-ring"></div>
        <div className="w-[1220px] h-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-75}>
          <StarIcon className="w-28 h-28 text-indigo-400" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={20}>
          <StarIcon className="w-12 h-12 text-indigo-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="w-8 h-8 text-indigo-300" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={76}>
          <SparkleIcon className="w-5 h-5 text-indigo-300/20" />
        </HeroOrbit>
        <HeroOrbit size={400} rotation={-100}>
          <SparkleIcon className="w-5 h-5 text-indigo-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src="/main-logo.png" alt="Logo" width={100} height={100} />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="relative bg-green-500 w-2 h-2 rounded-full">
              <div className="absolute bg-green-500 inset-0 rounded-full animate-ping"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto z-10">
          <h1 className="text-3xl md:text-5xl text-center mt-8 tracking-wide font-medium z-10">
            Hi, I am Parthiv!
          </h1>
          <p className="mt-4 text-center text-white/70 md:text-lg">
            I specialize in transforming designs into functional,
            high-performance web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-10">
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-gray-700 hover: transition-colors z-10"
            onClick={onClickHandler}
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-gray-200 z-10 transition-colors"
            onClick={onClickHandler2}
          >
            <span>👋</span>
            <span className="font-semibold ">Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
