import React from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

export const LanguageItems = ({
  languages,
  classname,
}: {
  languages: {
    title: string;
    iconName: React.ElementType;
  }[];
  classname?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        classname
      )}
    >
      <div className="flex flex-none py-0.5 gap-6">
        {languages.map((language) => (
          <div
            key={language.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-md"
          >
            <TechIcon component={language.iconName} />
            <span className="font-semibold">{language.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
