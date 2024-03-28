import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DrakModeSwitch from './DrakModeSwitch';

const Header = () => {
  return (
    <div className='flex justify-between p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex gap-4 items-center'>
        <div>
          <DrakModeSwitch/>
        </div>
        <Link href={"/"} className='flex items-center '>
          <span className='text-2xl bg-amber-500 py-1 px-2 rounded font-bold hover:bg-blue-400'>MovieVerse</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
