import React from 'react'
import Link from 'next/link'

const DownNavbar = () => {
  return (
    <div className='bg-white flex z-100 h-11 items-center left-1/2 -translate-x-1/2 bottom-5 text-black justify-between py-4 fixed w-[70%] rounded-md'>
      <section className='mx-5 roboto-slab-600 text-xl font-bold'>
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

export default DownNavbar
