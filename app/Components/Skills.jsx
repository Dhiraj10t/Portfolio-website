"use client"
import React from 'react'
import { useState, useEffect } from 'react'

const Skills = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0
  })
  const [data, setData] = useState({
    visible: false,
    info: "",
    name: ""
  })
  const [skill, setSkill] = useState([
    { name: "ReactJs", visible: false, info: "I use ReactJS to build modern, interactive, and scalable user interfaces using a component-based architecture. It allows me to break complex UIs into reusable components, manage application state efficiently with hooks, and create smooth user experiences in single-page applications. I focus on writing clean, maintainable React code while optimizing performance through proper state management and rendering techniques. React helps me deliver responsive and dynamic interfaces that feel fast and intuitive to users." },
    { name: "NextJs", visible: false, info: "Next.js is my go-to framework for building production-ready web applications with high performance and SEO optimization. I use its server-side rendering, static generation, and incremental regeneration features to ensure fast load times and better search engine visibility. With the App Router and API routes, I can build full-stack applications where frontend and backend work seamlessly together. Next.js allows me to ship scalable applications that are both developer-friendly and user-focused." },
    { name: "TailwindCSS", visible: false, info: "I use Tailwind CSS to design clean, modern, and responsive user interfaces efficiently. Its utility-first approach gives me full control over styling without writing large CSS files, helping me maintain consistency across the application. I frequently use Tailwind to implement dark mode, animations, hover effects, and responsive layouts. This approach allows me to rapidly prototype designs while still keeping the codebase clean and scalable." },
    { name: "Javascript", visible: false, info: "JavaScript is the foundation of all my web development work. I use modern ES6+ features to write clean, efficient, and readable code while handling asynchronous operations using promises and async/await. JavaScript enables me to implement dynamic functionality, manage application logic, and enhance user interaction across the frontend and backend. I focus on writing optimized logic that improves performance and reliability in real-world applications." },
    { name: "Express", visible: false, info: "Express.js is the framework I use to build structured and maintainable RESTful APIs. It allows me to manage routing, middleware, authentication, and error handling in a clean and organized way. I often implement JWT-based authentication and role-based access control using Express to secure applications. This framework helps me build backend systems that are easy to scale and maintain." },
    { name: "Nodejs", visible: false, info: "Node.js allows me to build scalable and high-performance backend systems using JavaScript. I use it to handle server-side logic, manage APIs, and process requests efficiently in real time. With Node.js, I can build backend services that integrate smoothly with frontend frameworks and handle growing application workloads. It helps me create fast, reliable, and scalable server environments." },
    { name: "C++", visible: false, info: "I use C++ to strengthen my understanding of core programming concepts and problem-solving skills. Working with C++ has helped me gain a solid foundation in data structures, algorithms, and memory management. This knowledge improves my logical thinking and enables me to write more efficient and optimized code across all technologies." },
    { name: "MongoDB", visible: false, info: "MongoDB is my preferred database when working with flexible and large-scale data. I use its schema-less structure to design adaptable data models and manage application data efficiently. With features like indexing and aggregation pipelines, I optimize queries and improve application performance. MongoDB works especially well in modern web applications that require scalability and flexibility." },
    { name: "MySQL", visible: false, info: "I use MySQL for applications that require structured, relational data and strong data consistency. It allows me to design normalized schemas, write complex queries, and maintain data integrity using constraints and transactions. MySQL is particularly useful for applications with clearly defined relationships and reporting requirements." },
    { name: "Git", visible: false, info: "Git is an essential part of my development workflow. I use it to track changes, manage branches, and maintain a clean and meaningful commit history. Git enables smooth collaboration, helps prevent code conflicts, and ensures that projects remain organized and maintainable throughout the development lifecycle." },
    { name: "Github", visible: false, info: "GitHub is where I host, manage, and showcase my projects. I use it for version control collaboration, pull requests, issue tracking, and documentation. GitHub also helps me integrate CI/CD workflows and present my work professionally to clients and recruiters." }
  ])

  const handleclick = (n, i) => {
    if (data?.name == n) {
      setData((prev) => ({ ...prev, visible: false, info: "", name: "" }))
    } else {
      setData((prev) => ({ ...prev, visible: true, info: i, name: n }))
    }
  }

  let skills = [
    { n: "ReactJS", img: "/react.png", glow: "drop-shadow-cyan-600", shadow: "shadow-cyan-400", fill: true, info: "I use ReactJS to build modern, interactive, and scalable user interfaces using a component-based architecture. It allows me to break complex UIs into reusable components, manage application state efficiently with hooks, and create smooth user experiences in single-page applications. I focus on writing clean, maintainable React code while optimizing performance through proper state management and rendering techniques. React helps me deliver responsive and dynamic interfaces that feel fast and intuitive to users." },
    { n: "NextJS", img: "/next.svg", glow: "drop-shadow-gray-600", shadow: "shadow-gray-400", fill: false, info: "Next.js is my go-to framework for building production-ready web applications with high performance and SEO optimization. I use its server-side rendering, static generation, and incremental regeneration features to ensure fast load times and better search engine visibility. With the App Router and API routes, I can build full-stack applications where frontend and backend work seamlessly together. Next.js allows me to ship scalable applications that are both developer-friendly and user-focused." },
    { n: "TailwindCSS", img: "/tailwindCSS.png", glow: "drop-shadow-cyan-400", shadow: "shadow-cyan-400", fill: false, info: "I use Tailwind CSS to design clean, modern, and responsive user interfaces efficiently. Its utility-first approach gives me full control over styling without writing large CSS files, helping me maintain consistency across the application. I frequently use Tailwind to implement dark mode, animations, hover effects, and responsive layouts. This approach allows me to rapidly prototype designs while still keeping the codebase clean and scalable." },
    { n: "Javascript", img: "/js.png", glow: "drop-shadow-yellow-200", shadow: "shadow-yellow-200", fill: true, info: "JavaScript is the foundation of all my web development work. I use modern ES6+ features to write clean, efficient, and readable code while handling asynchronous operations using promises and async/await. JavaScript enables me to implement dynamic functionality, manage application logic, and enhance user interaction across the frontend and backend. I focus on writing optimized logic that improves performance and reliability in real-world applications." },
    { n: "Express.JS", img: "/express.png", glow: "drop-shadow-gray-300", shadow: "shadow-gray-400", fill: false, info: "Express.js is the framework I use to build structured and maintainable RESTful APIs. It allows me to manage routing, middleware, authentication, and error handling in a clean and organized way. I often implement JWT-based authentication and role-based access control using Express to secure applications. This framework helps me build backend systems that are easy to scale and maintain." },
    { n: "NodeJS", img: "/node.png", glow: "drop-shadow-green-400", shadow: "shadow-green-400", fill: false, info: "Node.js allows me to build scalable and high-performance backend systems using JavaScript. I use it to handle server-side logic, manage APIs, and process requests efficiently in real time. With Node.js, I can build backend services that integrate smoothly with frontend frameworks and handle growing application workloads. It helps me create fast, reliable, and scalable server environments." },
    { n: "C++", img: "/C++.png", glow: "drop-shadow-blue-400", shadow: "shadow-sky-600", fill: true, info: "I use C++ to strengthen my understanding of core programming concepts and problem-solving skills. Working with C++ has helped me gain a solid foundation in data structures, algorithms, and memory management. This knowledge improves my logical thinking and enables me to write more efficient and optimized code across all technologies." },
    { n: "MongoDB", img: "/mongo.png", glow: "drop-shadow-amber-900", shadow: "shadow-green-400", fill: false, info: "MongoDB is my preferred database when working with flexible and large-scale data. I use its schema-less structure to design adaptable data models and manage application data efficiently. With features like indexing and aggregation pipelines, I optimize queries and improve application performance. MongoDB works especially well in modern web applications that require scalability and flexibility." },
    { n: "MySQL", img: "/mysql.png", glow: "drop-shadow-sky-800", shadow: "shadow-sky-600", fill: false, info: "I use MySQL for applications that require structured, relational data and strong data consistency. It allows me to design normalized schemas, write complex queries, and maintain data integrity using constraints and transactions. MySQL is particularly useful for applications with clearly defined relationships and reporting requirements." },
    { n: "Git", img: "/git.png", glow: "drop-shadow-gray-400", shadow: "shadow-orange-600", fill: false, info: "Git is an essential part of my development workflow. I use it to track changes, manage branches, and maintain a clean and meaningful commit history. Git enables smooth collaboration, helps prevent code conflicts, and ensures that projects remain organized and maintainable throughout the development lifecycle." },
    { n: "Github", img: "/github.png", glow: "drop-shadow-gray-400", shadow: "shadow-gray-400", fill: false, info: "GitHub is where I host, manage, and showcase my projects. I use it for version control collaboration, pull requests, issue tracking, and documentation. GitHub also helps me integrate CI/CD workflows and present my work professionally to clients and recruiters." },
  ]

  return (
    <div className='text-white'>
      <div className='text-7xl roboto-slab-600 text-gray-300 ml-[8%] tracking-wider'>Technologies i use</div>
      <section className='my-15 h-90 flex items-center no-scrollbar overflow-x-auto overflow-y-clip gap-20'>
        {skills.map(({ n, img, glow, shadow, fill, info }) => (
          <section key={n}
            onMouseEnter={() => {
              setTooltip((t) => ({ ...t, visible: true, text: n }))
            }}
            onMouseLeave={() => {
              setTooltip((t) => ({ ...t, visible: false, text: "" }))
            }}
            onMouseMove={(e) => {
              setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }))
            }}
          >
            <section
              onClick={(e) => handleclick(n, info)}
              className={`group hover:cursor-pointer h-60 w-60 backdrop-brightness-150 backdrop-blur-xs relative z-10 pointer-events-auto rounded-full shrink-0 flex items-center justify-center 
            ${n == "ReactJS" ? "ml-26" : ""}
            ${n == "Github" ? "mr-3" : ""}
            ${data.name==n?"border-2 border-[#FFD700]":""}
            hover:${shadow ? `hover:drop-shadow-xs` : `drop-shadow-xl`}
            hover:${glow == "drop-shadow-cyan-600" ? "drop-shadow-cyan-600" : ""}
            hover:${glow == "drop-shadow-gray-600" ? "drop-shadow-gray-600" : ""}
            hover:${glow == "drop-shadow-cyan-400" ? "drop-shadow-cyan-400" : ""}
            hover:${glow == "drop-shadow-yellow-200" ? "drop-shadow-yellow-200" : ""}
            hover:${glow == "drop-shadow-green-400" ? "drop-shadow-green-400" : ""}
            hover:${glow == "drop-shadow-blue-400" ? "drop-shadow-blue-400" : ""}
            hover:${glow == "drop-shadow-amber-900" ? "drop-shadow-amber-900" : ""}
            hover:${glow == "drop-shadow-sky-800" ? "drop-shadow-sky-800" : ""}
            hover:${glow == "drop-shadow-gray-400" ? "drop-shadow-gray-400" : ""}
            hover:${glow == "drop-shadow-gray-400" ? "drop-shadow-gray-400" : ""}
            hover:${shadow == "shadow-gray-400" ? `shadow-md shadow-gray-400` : ``}
            hover:${shadow == "shadow-cyan-400" ? `shadow-md shadow-cyan-400` : ``}
            hover:${shadow == "shadow-green-400" ? `shadow-md shadow-green-400` : ``}
            hover:${shadow == "shadow-sky-600" ? `shadow-md shadow-sky-600` : ``}
            hover:${shadow == "shadow-orange-600" ? `shadow-md shadow-orange-600` : ``}
            hover:${shadow == "shadow-yellow-200" ? `shadow-md shadow-yellow-200` : ``}
            `}>
              <img className={` z-1 ${fill ? "h-40" : "h-35"} ${n == "NextJS" ? "h-50 w-50" : ""}`} src={img} alt={n} />
            </section>
          </section>
        ))}
        {tooltip.visible && <span
          className={`fixed transition-transform z-10 duration-100 pointer-events-none
            bg-sky-800 text-white text-sm font-semibold
            px-3 py-1 rounded-lg`}
          style={{
            left: tooltip.x - 35,
            top: tooltip.y - 30,
          }}>
          <span>{tooltip.text}</span>
          <span className='text-gray-400 text-xs'>,click for more info</span>
        </span>}
      </section>
      {data.visible&&<section className={`backdrop-brightness-150 backdrop-blur-xs p-5 rounded-2xl ${data.visible?"mx-20 opacity-100":" h-0 opacity-0 mx-auto"} mt-10  transition-all flex flex-col justify-center gap-5 duration-500 text-2xl ubuntu-medium`}>
        <section className='text-4xl text-sky-200 flex justify-center w-full'>{data.name}</section>
        <section className='flex justify-center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.info}</section>
      </section>}
    </div>
  )
}

export default Skills
