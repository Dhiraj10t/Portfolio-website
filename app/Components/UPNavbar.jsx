import React from 'react'
import Link from 'next/link'
import { useNavbar } from '../Hooks/Navbarhelper'

const UpNavbar = () => {
  const { handleUp,Navbar } = useNavbar();
  return (
    <div className={` ${Navbar.up?"flex":"-translate-y-30 opacity-0 "} flex  ease-in-out bg-white z-100 items-center left-1/2 -translate-x-1/2 h-11 top-5  text-black transition-all duration-600 justify-between py-2 fixed w-[70%] rounded-md`}>
      <section className='roboto-slab-600 mx-2 text-xl font-bold flex align-middle gap-5'>
        <div onClick={(e)=>handleUp("L")} className='cursor-pointer border-r-2 h-8 flex items-center'>
          <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="-0.5 0 25 25" fill="none">
            <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.4102 16.4199L10.3502 13.55C10.1944 13.4059 10.0702 13.2311 9.98526 13.0366C9.9003 12.8422 9.85645 12.6321 9.85645 12.4199C9.85645 12.2077 9.9003 11.9979 9.98526 11.8035C10.0702 11.609 10.1944 11.4342 10.3502 11.29L13.4102 8.41992" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        Dhiraj Thorat
      </section>
      <section className='flex gap-5 mr-2'>
        <ul className='flex gap-5 mx-2 text-md'>
          <li className=''><Link href="">Projects</Link></li>
          <li><Link href="">Contact</Link></li>
        </ul>
        <div className={` border-l-2 h-8 cursor-pointer flex items-center`} onClick={(e)=>handleUp("R")}>
          <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="-0.5 0 25 25" fill="none">
            <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>
    </div>
  )
}

export default UpNavbar
