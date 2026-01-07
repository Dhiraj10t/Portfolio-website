import React from "react";

const Education = () => {
  return (
    <section className="text-white w-full relative mt-20 pb-24">
      {/* Title */}
      <h2 className="text-7xl roboto-slab-600 text-gray-300 ml-[8%] tracking-wider mb-24">
        Education
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white -translate-x-1/2" />

        {/* Item 1 */}
        <div className="flex justify-start w-full mb-24 ">
          <div className="w-1/2 pr-16 text-right">
            <div className="backdrop-blur-sm bg-white/5 pointer-events-auto duration-100 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">Bachelor of Engineering</h3>
              <p className="text-gray-400 mt-1">PCCOER, Ravet</p>
              <p className="text-sm mt-4 text-gray-300">
                Pursuing B.Tech in Computer Engineering with a strong focus on
                full-stack development, and modern web technologies.
              </p>
            </div>
          </div>

          {/* Dot */}
          <div className="relative">
            <div className="w-11 h-11 top-5 bg-[#19203b] border-4 border-white rounded-full z-10 relative " ></div>
          </div>

          <div className="w-1/2" />
        </div>

        {/* Item 2 */}
        <div className="flex justify-end w-full mb-24">
          <div className="w-1/2" />
        
          {/* Dot */}
          <div className="relative">
            <div className="w-11 h-11 top-5 bg-[#19203b] border-4 border-white rounded-full z-10 relative" />
          </div>

          <div className="w-1/2 pl-16">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">Higher Secondary (12th)</h3>
              <p className="text-gray-400 mt-1">Science Stream</p>
              <p className="text-sm mt-4 text-gray-300">
                Completed HSC with Physics, Chemistry, and Mathematics, building
                a strong analytical and problem-solving foundation.
              </p>
            </div>
          </div>
          
        </div>

        {/* Item 3 */}
        <div className="flex justify-start w-full">
          <div className="w-1/2 pr-16 text-right">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">Secondary (10th)</h3>
              <p className="text-gray-400 mt-1">SSC Board</p>
              <p className="text-sm mt-4 text-gray-300">
                Completed SSC with strong fundamentals in mathematics and logical
                reasoning.
              </p>
            </div>
          </div>

          {/* Dot */}
          <div className="relative">
            <div className="w-11 h-11 top-5 bg-[#19203b] border-4 border-white rounded-full z-10 relative" />
          </div>

          <div className="w-1/2" />
        </div>

      </div>
    </section>
  );
};

export default Education;
