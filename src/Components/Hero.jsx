import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./Canvas/Computers";

const Hero = () => {
  return (
    <section className="w-full min-h-screen mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-12 py-20">
      {/* === Text Section === */}
      <div className="flex-1 max-w-xl">
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-2">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Dinesh Babu</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-white-100`}>
              I develop Blockchain solutions,
              <br className="sm:block hidden" />
              and web applications
            </p>
          </div>
        </div>
      </div>

      {/* === 3D Computer Canvas === */}
      <div className="flex-1 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
