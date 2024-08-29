interface sectionTypes {
  title: string;
  sectionName: string;
  description: string;
}

export const SectionHeader = ({
  title,
  sectionName,
  description,
}: sectionTypes) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {title}
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl text-center mt-6">{sectionName}</h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
