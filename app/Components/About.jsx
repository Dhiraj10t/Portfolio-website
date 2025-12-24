import React from 'react'


const About = () => {
    return (
        <div className='w-full'>
            <lable className="text-7xl z-1 tracking-widest ml-30 text-gray-300 flex roboto-slab-600 ">ABOUT ME</lable>
            <div className='flex my-23'>
                <div className='text-2xl z-1 mx-30 tracking-wider gap-2 flex flex-col ubuntu-regular'>
                    <p>I’m a Full Stack Developer with strong experience in the MERN stack, focused on building scalable, secure, and user-friendly web applications. I enjoy transforming ideas into real products by combining clean frontend design with efficient and reliable backend logic.</p>

                    <p>I’ve worked on projects involving JWT-based authentication, role-based access control, cloud-based media storage, real-time features, and location-based services, and I integrate AI-powered features and tools where they add real value, such as improving user interactions, automating workflows, and enhancing application functionality.</p>

                    <p>I’m passionate about continuous learning and improving my skills by building real-world projects. My goal is to grow as a high-impact full-stack developer and build meaningful products that solve real problems using modern technologies, including AI.</p>
                </div>
            </div>
        </div>
    )
}

export default About
