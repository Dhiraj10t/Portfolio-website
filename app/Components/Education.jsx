import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="text-white w-full relative mt-20 pb-24">

      {/* Title */}
      <div className="lg:text-7xl md:text-5xl text-4xl flex justify-center md:justify-start border-b-2 p-2 roboto-slab-600 text-white md:mx-30 mx-5 tracking-wider mb-16">
        EDUCATION
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-4">

        {/* Vertical Line */}
        <div className="absolute left-11 md:left-1/2 top-0 h-full w-1 bg-white md:-translate-x-1/2" />

        {/* ========== ITEM 1 ========== */}
        <div className="flex flex-col  md:flex-row items-start md:items-center mb-16">

          {/* Left (Desktop) */}
          <div className="hidden md:block w-1/2 pr-16 text-right">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 140, damping: 10 }}
              className="backdrop-blur-sm backdrop-brightness-125 p-6 rounded-2xl"
            >
              <h3 className="text-4xl font-bold">Bachelor of Engineering</h3>
              <p className="text-[#FFD700] mt-1">PCCOER, Ravet</p>
              <p className="text-md mt-4 text-gray-300">
                Pursuing B.Tech in Computer Engineering with a strong focus on
                full-stack development and modern web technologies.
              </p>
            </motion.div>
          </div>

          {/* Dot */}
          <div className="relative w-full md:w-auto flex items-center">
            <div className="absolute left-4 md:relative md:left-auto w-7 h-7 md:w-14 md:h-14 bg-[#19203b] border-4 border-white rounded-full z-10"></div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 pl-10 md:pl-16">

            {/* Mobile view */}
            <div className="md:hidden">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 140, damping: 10 }}
                className="backdrop-blur-sm backdrop-brightness-125 p-5 rounded-2xl"
              >
                <h3 className="text-2xl font-bold">Bachelor of Engineering</h3>
                <p className="text-[#FFD700] mt-1">PCCOER, Ravet</p>
                <p className="text-sm mt-3 text-gray-300">
                  Pursuing B.Tech in Computer Engineering with a strong focus on
                  full-stack development and modern web technologies.
                </p>
              </motion.div>
            </div>

          </div>
        </div>

        {/* ========== ITEM 2 ========== */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-16">

          <div className="hidden md:block w-1/2"></div>

          {/* Dot */}
          <div className="relative w-full md:w-auto flex items-center">
            <div className="absolute left-4 md:relative md:left-auto w-7 h-7 md:w-14 md:h-14 bg-[#19203b] border-4 border-white rounded-full z-10"></div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 pl-10 md:pl-16">

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 140, damping: 10 }}
              className="backdrop-blur-sm backdrop-brightness-125 p-5 md:p-6 rounded-2xl"
            >
              <h3 className="text-2xl md:text-4xl font-bold">
                Higher Secondary (12th)
              </h3>
              <p className="text-[#FFD700] mt-1">Science Stream</p>
              <p className="text-sm md:text-md mt-3 text-gray-300">
                Completed HSC with Physics, Chemistry, and Mathematics,
                building a strong analytical and problem-solving foundation.
              </p>
            </motion.div>

          </div>
        </div>

        {/* ========== ITEM 3 ========== */}
        <div className="flex flex-col md:flex-row items-start md:items-center">

          {/* Left (Desktop) */}
          <div className="hidden md:block w-1/2 pr-16 text-right">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 140, damping: 10 }}
              className="backdrop-blur-sm backdrop-brightness-125 p-6 rounded-2xl"
            >
              <h3 className="text-4xl font-bold">Secondary (10th)</h3>
              <p className="text-[#FFD700] mt-1">SSC Board</p>
              <p className="text-md mt-4 text-gray-300">
                Completed SSC with strong fundamentals in mathematics and
                logical reasoning.
              </p>
            </motion.div>
          </div>

          {/* Dot */}
          <div className="relative w-full md:w-auto flex items-center">
            <div className="absolute left-4 md:relative md:left-auto w-7 h-7 md:w-14 md:h-14 bg-[#19203b] border-4 border-white rounded-full z-10"></div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 pl-10 md:pl-16">

            {/* Mobile */}
            <div className="md:hidden">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 140, damping: 10 }}
                className="backdrop-blur-sm backdrop-brightness-125 p-5 rounded-2xl"
              >
                <h3 className="text-2xl font-bold">Secondary (10th)</h3>
                <p className="text-[#FFD700] mt-1">SSC Board</p>
                <p className="text-sm mt-3 text-gray-300">
                  Completed SSC with strong fundamentals in mathematics and
                  logical reasoning.
                </p>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;