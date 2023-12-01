import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-11 bg-hero bg-no-repeat bg-cover flex flex-wrap justify-around items-center rounded-xl w-full h-full'>
        <div className='flex flex-col gap-5'>
            <p className='text-xl font-bold text-[#AB9797]'>Welcome To GameGalaxy</p>
            <h1 className='text-5xl max-md:text-3xl font-black text-white'>Get The <span className='text-[#4557F6]'>Best</span> <br/> Games In  <span className='text-[#4557F6]'> The Galaxy</span></h1>
            <Link href='#' className='bg-[#4557F6] p-2 rounded-2xl w-fit font-bold'>
                Browse Now
                </Link>

        </div>
        <Image
        src='/game.svg'
        alt="game-console"
        width={330}
        height={250}
        />
    </header>
  )
}

export default Header