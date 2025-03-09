"use client"
import {AlignJustify,X} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'

const Navbar = () => {
    const [open,setOpen] = useState(true)

    return (
        <>
            <nav className='hidden md:flex py-3  justify-between px-20 items-center  border-b border-primary   my-2'>
                <Link className='' href={"/"}>
                    <Image src={"/logo.png"} alt='' height={55} width={55} />
                </Link>
                <ul className='hidden md:flex gap-6'>
                    <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={"#features"}>Features</Link>
                    <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={"#reviews"}>Reviews</Link>
                    <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={"#pricing"}>Pricing</Link>
                    <Link className='font-header text-lg py-1 px-4 hover:bg-primary duration-300 text-text rounded-md' href={"#faq"}>FAQ</Link>
                </ul>
                <Link href={"/login"} className='hidden md:flex'>
                    <button className='bg-primary rounded-md cursor-pointer text-text hover:opacity-85 py-2 px-8'>Login</button>
                </Link>

                {/* mobile */}


            </nav>
            <div onClick={() => setOpen(!open)} className={`p-6 md:hidden cursor-pointer ${open === true && "hidden "}`}>
                <AlignJustify className='w-12 h-12 p-2 hover:bg-gray-600 rounded-lg ml-auto' />
            </div>
            <div className={`h-screen fixed md:hidden flex flex-col items-center bg-black w-full ${open === false && "hidden"}`}>
                <div className='flex my-6 w-full px-4 items-center justify-between'>
                    <Image src={"/logo.png"} alt='' height={65} width={65} />
                    <span>
                        <X onClick={() => setOpen(!open)} className='w-12 h-12 p-2 cursor-pointer hover:bg-gray-600 rounded-lg' />
                    </span>
                </div>
                <ul className='flex flex-col w-full items-center my-10 gap-5'>
                    <Link onClick={() => setOpen(!open)} className='font-header text-lg py-1 px-20 hover:bg-primary duration-300 text-text rounded-md' href={"#features"}>Features</Link>
                    <Link onClick={() => setOpen(!open)} className='font-header text-lg py-1 px-20 hover:bg-primary duration-300 text-text rounded-md' href={"#reviews"}>Reviews</Link>
                    <Link onClick={() => setOpen(!open)} className='font-header text-lg py-1 px-20 hover:bg-primary duration-300 text-text rounded-md' href={"#pricing"}>Pricing</Link>
                    <Link onClick={() => setOpen(!open)} className='font-header text-lg py-1 px-20 hover:bg-primary duration-300 text-text rounded-md' href={"#faq"}>FAQ</Link>
                    <Link href={"/login"} className='block w-full px-4 my-10 md:hidden'>
                        <button className='bg-primary rounded-md cursor-pointer w-full text-text hover:opacity-85 py-2'>Login</button>
                    </Link>
                </ul>
            </div >
        </>
    )
}

export default Navbar
