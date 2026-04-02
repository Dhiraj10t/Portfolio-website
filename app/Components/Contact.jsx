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
        <div className="mt-15">
            <div className='text-7xl  roboto-slab-600 text-white border-b-2 p-2 mx-[8%] tracking-wider'>CONTACT</div>
            <section className="w-full ubuntu-regular min-h-screen flex items-center justify-center px-6 py-16">
                <div className="mx-30 w-full grid md:grid-cols-2 gap-8">

                    {/* LEFT CARD */}
                    <div className="backdrop-blur-sm backdrop-brightness-150 rounded-2xl p-8 shadow-lg border border-gray-800">

                        <div className="mb-8">
                            <div className="flex items-center gap-3 text-yellow-400 font-semibold">
                                <FaMapMarkerAlt />
                                <span>ADDRESS</span>
                            </div>
                            <p className="text-gray-300 mt-2">Pune, Maharashtra</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 text-yellow-400 font-semibold">
                                <FaPhoneAlt />
                                <span>CONTACT NUMBER</span>
                            </div>
                            <p className="text-gray-300 mt-2">+91 7020346951</p>
                        </div>

                        <div className="mb-10">
                            <div className="flex items-center gap-3 text-yellow-400 font-semibold">
                                <FaEnvelope />
                                <span>EMAIL ADDRESS</span>
                            </div>
                            <p className="text-gray-300 mt-2">dhirajstorat10@gmail.com</p>
                        </div>

                        <a href="/resume.pdf" download="Dhiraj_Thorat_resume.pdf" className="flex hover:cursor-pointer pointer-events-auto items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 w-60 py-3 rounded-lg transition">
                            <FaDownload />
                            DOWNLOAD RESUME
                        </a>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="backdrop-blur-sm backdrop-brightness-150 rounded-2xl p-8 shadow-lg border border-gray-800">
                        <h2 className="text-white text-2xl font-semibold mb-6">
                            Get in Touch
                        </h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name *"
                                className="w-full pointer-events-auto bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full pointer-events-auto bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full pointer-events-auto bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
                            />

                            <input
                                type="text"
                                placeholder="Subject *"
                                className="w-full pointer-events-auto bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
                            />

                            <textarea
                                rows="4"
                                placeholder="Message *"
                                className="w-full pointer-events-auto bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400 resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-yellow-400 pointer-events-auto hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
                            >
                                SEND MESSAGE
                            </button>
                        </form>

                        <div className="mt-8">
                            <p className="text-gray-400 mb-2">Find me on</p>
                            <div className="flex gap-4 text-yellow-400 text-xl">
                                <a href="https://www.linkedin.com/in/dhiraj-thorat-147678292/"><FaLinkedin className="cursor-pointer pointer-events-auto hover:text-yellow-500" /></a>
                                <a href="https://github.com/Dhiraj10t"><FaGithub className="cursor-pointer pointer-events-auto hover:text-yellow-500" /></a>
                                <a href="https://leetcode.com/u/dhirajThorat/"><SiLeetcode className="cursor-pointer pointer-events-auto hover:text-yellow-500" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
