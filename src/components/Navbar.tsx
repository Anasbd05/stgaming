import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex py-3  justify-between px-20 items-center  border-b border-primary   my-2'>
            <Link href={"/"}>
                <Image src={"/logo.png"} alt='' height={55} width={55} />
            </Link>
            <ul className='hidden md:flex gap-6'>
                <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={"#features"}>Features</Link>
                <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={"#reviews"}>Reviews</Link>
                <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={"#pricing"}>Pricing</Link>
                <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={"#faq"}>FAQ</Link>
            </ul>
            <Link href={"/login"}>
                <button className='bg-primary rounded-md text-text hover:opacity-85 py-2 px-8'>Login</button>
            </Link>
        </nav>
    )
}

export default Navbar
