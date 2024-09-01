import ArrowUpRight from "@/public/Icon/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    url: "https://github.com/parthiv011",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/parthiv-parmar-7aa38b224/",
  },
  {
    title: "Twitter",
    url: "https://x.com/Parthiv_21",
  },
  {
    title: "Leetcode",
    url: "https://leetcode.com/u/parthiv_77/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-indigo-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-20">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.url}
                key={link.title}
                className="inline-flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
