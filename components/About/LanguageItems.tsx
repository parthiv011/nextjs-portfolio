import React, { Fragment } from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

export const LanguageItems = ({
  languages,
  classname,
  itemsWrapperClass,
}: {
  languages: {
    title: string;
    iconName: React.ElementType;
  }[];
  classname?: string;
  itemsWrapperClass?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        classname
      )}
    >
      <div
        className={twMerge("flex flex-none py-0.5 gap-6", itemsWrapperClass)}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <Fragment key={index}>
              {languages.map((language) => (
                <div
                  key={language.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-md"
                >
                  <TechIcon component={language.iconName} />
                  <span className="font-semibold">{language.title}</span>
                </div>
              ))}
            </Fragment>
          )),
        ]}
      </div>
    </div>
  );
};
