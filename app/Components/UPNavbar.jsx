import React from 'react'
import Link from 'next/link'
import { useNavbar } from '../Hooks/Navbarhelper'

const UpNavbar = () => {
  const {handleUp}=useNavbar();
  const handleclickL=()=>{
    handleUp("L");
  }
  const handleclickR=()=>{
    handleUp("R");
  }
  return (
    <div className='bg-white  flex z-100 items-center left-1/2 -translate-x-1/2 h-11 top-5 text-black justify-between py-2 fixed w-[70%] rounded-md'>
      <section className='roboto-slab-600 mx-5 text-xl font-bold'>
        Dhiraj Thorat
      </section>
      <section>
        <ul className='flex gap-5 mx-5 text-md'>
            <li className=''><Link href="">Projects</Link></li>
            <li><Link href="">Contact</Link></li>
        </ul>
      </section>
    </div>
  )
}

export default UpNavbar
