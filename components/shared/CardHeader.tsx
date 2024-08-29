import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  classname,
}: {
  title: string;
  description: string;
  classname?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col", classname)}>
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="text-white/60 text-sm mt-2 ">{description}</p>
    </div>
  );
};
