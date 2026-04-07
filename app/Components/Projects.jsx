import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>

            {/* Title */}
            <div className='text-4xl md:text-5xl lg:text-7xl flex justify-center md:justify-start roboto-slab-600 text-white border-b-2 p-2 mx-[5%] md:mx-[8%] tracking-wider'>
                PROJECTS
            </div>

            {/* Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 ubuntu-regular gap-6 md:gap-10 mx-5 md:mx-20 lg:mx-30 mt-10 md:mt-15'>

                {/* Project 1 */}
                <div className='px-5 md:px-8 py-5 md:py-6 backdrop-blur-sm backdrop-brightness-150 rounded-xl'>
                    <section className='text-xl md:text-2xl lg:text-3xl text-center font-bold mb-5 md:mb-7 tracking-wide'>
                        Digital Compliance Management System
                    </section>

                    <section className='tracking-wide text-[#FFD700] text-sm md:text-base'>
                        Tech Stack: React.js, Node.js, Express, MongoDB, TailwindCSS, JWT, Nodemailer
                    </section>

                    <section className='ml-4 md:ml-6 mt-2'>
                        <ul className='list-disc text-sm md:text-md'>
                            <li>Developed a full-stack digital compliance management platform using React.js, Node.js, Express, and MongoDB.</li>
                            <li>Automated audits, tracked compliance, and provided real-time regulatory updates for seamless management.</li>
                            <li>Implemented secure authentication using JWT and role-based access for admins and users.</li>
                            <li>Built interactive UI components using React, Tailwind CSS, and Framer Motion for smooth user experience.</li>
                            <li>Enabled email notifications and validation using Nodemailer and Validator.js.</li>
                        </ul>
                    </section>
                </div>

                {/* Project 2 */}
                <div className='px-5 md:px-8 py-5 md:py-6 backdrop-blur-sm backdrop-brightness-150 rounded-xl'>
                    <section className='text-xl md:text-2xl lg:text-3xl text-center font-bold mb-5 md:mb-7 tracking-wide'>
                        Fixora-Civic Issue Management System
                    </section>

                    <section className='tracking-wide text-[#FFD700] text-sm md:text-base'>
                        Tech Stack: React.js, Node.js, Express, MongoDB, TailwindCSS, JWT, Cloudinary
                    </section>

                    <section className='ml-4 md:ml-6 mt-2'>
                        <ul className='list-disc text-sm md:text-md'>
                            <li>Developed a full-stack civic issue management system using React.js, Node.js, Express, and MongoDB.</li>
                            <li>Enabled users to submit complaints with real-time location fetching, category, date, landmarks, and photos.</li>
                            <li>Integrated Cloudinary for secure cloud-based image storage and efficient media management.</li>
                            <li>Implemented JWT-based authentication with role-based access control for admin and users.</li>
                            <li>Built an admin dashboard to track complaints and update status (Pending, Working, Solved), including resolution images.</li>
                        </ul>
                    </section>
                </div>

                {/* Project 3 */}
                <div className='px-5 md:px-8 py-5 md:py-6 backdrop-blur-sm backdrop-brightness-150 rounded-xl'>
                    <section className='text-xl md:text-2xl lg:text-3xl text-center font-bold mb-5 md:mb-7 tracking-wide'>
                        E-Commerce Website
                    </section>

                    <section className='tracking-wide text-[#FFD700] text-sm md:text-base'>
                        Tech Stack: React.js, Node.js, Express, MongoDB, TailwindCSS, JWT
                    </section>

                    <section className='ml-4 md:ml-6 mt-2'>
                        <ul className='list-disc text-sm md:text-md'>
                            <li>Developed a full-stack e-commerce platform using React.js, Node.js, Express, and MongoDB with secure JWT-based authentication.</li>
                            <li>Implemented core features including product management, cart, order processing, and an admin panel with role-based access.</li>
                            <li>Designed a responsive, user-friendly UI using React and Tailwind CSS for a smooth shopping experience.</li>
                        </ul>
                    </section>
                </div>

            </div>
        </div>
    )
}

export default Projects