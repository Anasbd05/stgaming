import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex py-2 md:mx-10  lg:mx-20  justify-between px-10 items-center rounded-full border-2 border-background/80   my-2'>
            <Image src={"/logo.png"} alt='' height={55} width={55} />
            <ul className='flex gap-6'>
                <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={""}>Features</Link>
                <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={""}>Pricing</Link>
                <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={""}>Faqs</Link>
            </ul>
            <button className='bg-primary rounded-full text-text hover:opacity-85 py-1 px-5'>Login</button>
        </nav>
    )
}

export default Navbar
