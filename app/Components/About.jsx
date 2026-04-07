import React from 'react'
import { FaDownload } from 'react-icons/fa'


const About = () => {
    return (
        <div className='w-screen'>
            <lable className="lg:text-7xl md:text-5xl text-4xl z-1 border-b-2 not-lg:flex not-lg:justify-center tracking-widest lg:mx-30 mx-5 p-2 text-white flex roboto-slab-600 ">ABOUT ME</lable>
            <div className='flex lg:my-23 md:my-17 my-9 flex-col gap-10 '>
                <div className='lg:text-2xl md:text-xl text-justify break-all text-lg z-1 mx-5 lg:mx-30 md:mx-10 tracking-wider gap-2 flex flex-col ubuntu-regular'>
                    <p>I’m a Full Stack Developer with strong experience in the MERN stack, focused on building scalable, secure, and user-friendly web applications. I enjoy transforming ideas into real products by combining clean frontend design with efficient and reliable backend logic.</p>

                    <p>I’ve worked on projects involving JWT-based authentication, role-based access control, cloud-based media storage, real-time features, and location-based services, and I integrate AI-powered features and tools where they add real value, such as improving user interactions, automating workflows, and enhancing application functionality.</p>

                    <p>I’m passionate about continuous learning and improving my skills by building real-world projects. My goal is to grow as a high-impact full-stack developer and build meaningful products that solve real problems using modern technologies, including AI.</p>
                </div>
                <div>
                    <a href="/resume.pdf" download="Dhiraj_Thorat_resume.pdf" className="mx-auto lg:w-60 md:w-60 w-50 flex hover:cursor-pointer pointer-events-auto not-lg:text-sm items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 lg:px-6 lg:py-3 md:px-6 md:py-3 rounded-lg transition">
                        <FaDownload />
                        DOWNLOAD RESUME
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
