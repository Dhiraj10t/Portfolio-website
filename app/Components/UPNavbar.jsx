import React from 'react'
import { useNavbar } from '../Hooks/Navbarhelper'

const UpNavbar = () => {
  const { handleUp, Navbar } = useNavbar();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust based on navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        Navbar.up ? "flex" : "-translate-y-30 opacity-0"
      } fixed md:top-5 top-3 left-1/2 -translate-x-1/2 z-50 
      items-center justify-between 
      bg-white text-black 
      transition-all duration-500 ease-in-out 
      h-11 rounded-md 
      px-2 md:px-4
      w-[90%] sm:w-[85%] md:w-[70%]`}
    >

      {/* LEFT */}
      <section className='roboto-slab-600 flex items-center gap-2 md:gap-5 text-sm md:text-xl font-bold'>

        {/* Left Arrow */}
        <div
          onClick={() => handleUp("L")}
          className='hidden md:flex cursor-pointer border-r-2 h-7 md:h-8 items-center pr-1 md:pr-2'
        >
          <svg width="22px" height="22px" className="md:w-[28px] md:h-[28px]" viewBox="-0.5 0 25 25" fill="none">
            <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#000" strokeWidth="1.5" />
            <path d="M13.4102 16.4199L10.3502 13.55C10.1944 13.4059 10.0702 13.2311 9.98526 13.0366C9.9003 12.8422 9.85645 12.6321 9.85645 12.4199C9.85645 12.2077 9.9003 11.9979 9.98526 11.8035C10.0702 11.609 10.1944 11.4342 10.3502 11.29L13.4102 8.41992" stroke="#000" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Name */}
        <span className='truncate max-w-[120px] sm:max-w-full'>
          Dhiraj Thorat
        </span>
      </section>

      {/* RIGHT */}
      <section className='flex items-center gap-2 md:gap-5'>

        {/* Links */}
        <ul className='flex gap-2 md:gap-5 text-xs md:text-md'>

          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer"
            >
              Projects
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer"
            >
              Contact
            </button>
          </li>

        </ul>

        {/* Right Arrow */}
        <div
          className='hidden md:flex border-l-2 h-7 md:h-8 cursor-pointer items-center pl-1 md:pl-2'
          onClick={() => handleUp("R")}
        >
          <svg width="22px" height="22px" className="md:w-[28px] md:h-[28px]" viewBox="-0.5 0 25 25" fill="none">
            <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#000" strokeWidth="1.5" />
            <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#000" strokeWidth="1.5" />
          </svg>
        </div>

      </section>
    </div>
  )
}

export default UpNavbar