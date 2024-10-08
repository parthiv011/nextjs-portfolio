import { SectionHeader } from "@/components/shared/SectionHeader";
import memojiAvatar1 from "@/public/memoji-avatar-1.png";
import grainImage from "@/public/grain.jpg";
import Image from "next/image";
import { Card } from "@/components/shared/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar1,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar1,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar1,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar1,
  },
];

export const Testimonial = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Happy Clients"
          sectionName="What Clients Say About Me"
          description="Don't just take my words for it. See what clients have to say about me"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial) => (
                    <Card className="p-6 max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-500">
                      <div
                        className="absolute inset-0 -z-10 opacity-5"
                        style={{
                          backgroundImage: `url(${grainImage.src})`,
                        }}
                      ></div>
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-800 inline-flex justify-center items-center size-14 rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm  text-white/50">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm md:text-base mt-4 md:mt-6 lg:mt-8">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
