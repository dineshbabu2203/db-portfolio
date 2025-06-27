import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>

      <motion.div
        className="flex flex-row flex-wrap justify-center gap-10 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1,
              duration: 0.5,
              ease: "easeOut",
            },
          },
        }}
      >
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            className="w-28 h-36 flex flex-col items-center justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.img
              src={technology.icon}
              alt={technology.name}
              className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.2 }}
            />
            <p className="mt-2 text-sm text-center text-white">{technology.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
