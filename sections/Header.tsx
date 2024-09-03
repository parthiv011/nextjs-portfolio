"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isActive, setIsActive] = useState("#contact");

  const getLinkClass = (link: string) => {
    return link === isActive
      ? "bg-white text-gray-900"
      : "bg-transparent text-white";
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/15 backdrop-blur">
        <motion.a
          href="#"
          className={`nav-item ${getLinkClass("#")}`}
          onClick={() => setIsActive("#")}
          animate={{
            backgroundColor: isActive === "#" ? "#ffffff" : "transparent",
            color: isActive === "#" ? "#1f2937" : "#ffffff",
          }}
          transition={{ duration: 1 }}
        >
          Home
        </motion.a>
        <motion.a
          href="#projects"
          className={`nav-item ${getLinkClass("#projects")}`}
          onClick={() => setIsActive("#projects")}
          animate={{
            backgroundColor:
              isActive === "#projects" ? "#ffffff" : "transparent",
            color: isActive === "#projects" ? "#1f2937" : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#about"
          className={`nav-item ${getLinkClass("#about")}`}
          onClick={() => setIsActive("#about")}
          animate={{
            backgroundColor: isActive === "#about" ? "#ffffff" : "transparent",
            color: isActive === "#about" ? "#1f2937" : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
        >
          About
        </motion.a>
        <motion.a
          href="#contact"
          className={`nav-item ${getLinkClass("#contact")}`}
          onClick={() => setIsActive("#contact")}
          animate={{
            backgroundColor:
              isActive === "#contact" ? "#ffffff" : "transparent",
            color: isActive === "#contact" ? "#1f2937" : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
        >
          Contact
        </motion.a>
      </nav>
    </div>
  );
};
