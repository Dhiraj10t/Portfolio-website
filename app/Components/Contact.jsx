import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaDownload,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
    return (
        <div id="contact" className="mt-10 md:mt-15">

            {/* Title */}
            <div className='text-4xl md:text-5xl lg:text-7xl flex justify-center md:justify-start roboto-slab-600 text-white border-b-2 p-2 mx-[5%] md:mx-[8%] tracking-wider'>
                CONTACT
            </div>

            <section className="w-full ubuntu-regular min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-16">

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-2 md:mx-20 lg:mx-30">

                    {/* LEFT CARD */}
                    <div className="backdrop-blur-sm backdrop-brightness-150 rounded-2xl p-5 md:p-8 shadow-lg border border-gray-800">

                        <div className="mb-6 md:mb-8">
                            <div className="flex items-center gap-3 text-yellow-400 font-semibold text-sm md:text-base">
                                <FaMapMarkerAlt />
                                <span>ADDRESS</span>
                            </div>
                            <p className="text-gray-300 mt-2 text-sm md:text-base">
                                Pune, Maharashtra
                            </p>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <div className="flex items-center gap-3 text-yellow-400 font-semibold text-sm md:text-base">
                                <FaPhoneAlt />
                                <span>CONTACT NUMBER</span>
                            </div>
                            <p className="text-gray-300 mt-2 text-sm md:text-base">
                                +91 7020346951
                            </p>
                        </div>

                        <div className="mb-8 md:mb-10">
                            <div className="flex items-center gap-3 text-yellow-400 font-semibold text-sm md:text-base">
                                <FaEnvelope />
                                <span>EMAIL ADDRESS</span>
                            </div>
                            <p className="text-gray-300 mt-2 text-sm md:text-base">
                                dhirajstorat10@gmail.com
                            </p>
                        </div>

                        <a
                            href="/resume.pdf"
                            download="Dhiraj_Thorat_resume.pdf"
                            className="flex items-center justify-center md:justify-start gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 md:px-6 py-3 rounded-lg transition w-full md:w-60"
                        >
                            <FaDownload />
                            DOWNLOAD RESUME
                        </a>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="backdrop-blur-sm backdrop-brightness-150 rounded-2xl p-5 md:p-8 shadow-lg border border-gray-800">

                        <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                            Get in Touch
                        </h2>

                        <form className="space-y-3 md:space-y-4">

                            <input
                                type="text"
                                placeholder="Full Name *"
                                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white outline-none focus:border-yellow-400 text-sm md:text-base"
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white outline-none focus:border-yellow-400 text-sm md:text-base"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white outline-none focus:border-yellow-400 text-sm md:text-base"
                            />

                            <input
                                type="text"
                                placeholder="Subject *"
                                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white outline-none focus:border-yellow-400 text-sm md:text-base"
                            />

                            <textarea
                                rows="4"
                                placeholder="Message *"
                                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white outline-none focus:border-yellow-400 resize-none text-sm md:text-base"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 md:py-3 rounded-lg transition w-full md:w-auto"
                            >
                                SEND MESSAGE
                            </button>
                        </form>

                        {/* Socials */}
                        <div className="mt-6 md:mt-8">
                            <p className="text-gray-400 mb-2 text-sm md:text-base">
                                Find me on
                            </p>

                            <div className="flex gap-4 text-yellow-400 text-lg md:text-xl justify-center md:justify-start">
                                <a href="https://www.linkedin.com/in/dhiraj-thorat-147678292/">
                                    <FaLinkedin className="cursor-pointer hover:text-yellow-500" />
                                </a>
                                <a href="https://github.com/Dhiraj10t">
                                    <FaGithub className="cursor-pointer hover:text-yellow-500" />
                                </a>
                                <a href="https://leetcode.com/u/dhirajThorat/">
                                    <SiLeetcode className="cursor-pointer hover:text-yellow-500" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;