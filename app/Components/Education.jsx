import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="text-white w-full relative mt-20 pb-24">
      {/* Title */}
      <div className="text-7xl border-b-2 p-2 roboto-slab-600 text-white mx-[8%] tracking-wider mb-24">
        EDUCATION
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white -translate-x-1/2" />

        {/* Item 1 */}
        <div className="flex ubuntu-regular justify-start w-full mb-24 ">
          <div
            className="w-1/2 pr-16 text-right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 10, duration: 0.5
              }}
              className="backdrop-blur-sm backdrop-brightness-125 pointer-events-auto duration-100 p-6 rounded-2xl">
              <h3 className="text-4xl font-bold">Bachelor of Engineering</h3>
              <p className=" text-[#FFD700] mt-1">PCCOER, Ravet</p>
              <p className="text-md mt-4 text-gray-300">
                Pursuing B.Tech in Computer Engineering with a strong focus on
                full-stack development, and modern web technologies.
              </p>
            </motion.div>
          </div>

          {/* Dot */}
          <div className="relative">
            <div className="w-14 h-14 top-5 bg-[#19203b] border-4 border-white rounded-full z-10 relative " ></div>
          </div>

          <div className="w-1/2" />
        </div>

        {/* Item 2 */}
        <div className="flex ubuntu-regular justify-end w-full mb-24">
          <div className="w-1/2" />

          {/* Dot */}
          <div className="relative">
            <div className="w-14 h-14 top-5 bg-[#19203b] border-4 border-white rounded-full z-10 relative" />
          </div>

          <div className="w-1/2 pl-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 10, duration: 0.5
              }}
              className="backdrop-blur-sm backdrop-brightness-125 p-6 rounded-2xl">
              <h3 className="text-4xl font-bold">Higher Secondary (12th)</h3>
              <p className="text-[#FFD700] mt-1">Science Stream</p>
              <p className="text-md mt-4 text-gray-300">
                Completed HSC with Physics, Chemistry, and Mathematics, building
                a strong analytical and problem-solving foundation.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Item 3 */}
        <div className="flex ubuntu-regular justify-start w-full">
          <div className="w-1/2 pr-16 text-right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 10, duration: 0.5
              }}
              className="backdrop-blur-sm backdrop-brightness-125 p-6 rounded-2xl">
              <h3 className="text-4xl font-bold">Secondary (10th)</h3>
              <p className="text-[#FFD700] mt-1">SSC Board</p>
              <p className="text-md mt-4 text-gray-300">
                Completed SSC with strong fundamentals in mathematics and logical
                reasoning.
              </p>
            </motion.div>
          </div>

          {/* Dot */}
          <div className="relative">
            <div className="w-14 h-14 top-5 bg-[#19203b] border-4 border-white rounded-full z-10 relative" />
          </div>

          <div className="w-1/2" />
        </div>

      </div>
    </section>
  );
};

export default Education;
