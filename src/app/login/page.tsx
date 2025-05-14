import Image from 'next/image'
import React from 'react'
import AuthImg from "../../../public/Abstract Curves and Colors.jpeg"
import Logo from '@/components/Logo'
import {LoginForm} from '@/components/login-form'

const LoginPage = () => {
    return (
        <div className='h-screen grid grid-cols-2 relative'>
            <main className=' relative flex w-full flex-col p-10 text-foreground '>
                <div className='w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10' />
                <div className='w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10' />
                <Image src={AuthImg} alt='' fill className='w-full h-full object-cover' />
                <div className="relative z-20 flex items-center">
                    <Logo />
                </div>
                <div className='relative z-20 mt-auto'>
                    <blockquote className='space-y-2'>
                        <p className='text-lg  text-white'>
                            &ldquo; Pictoria AI is a game changer for me. I have been able to generate high quality professional
                            headshots within minutes. It has saved me countless hours of work and cost as well. &rdquo;
                        </p>
                        <footer className='text-sm text-white'>David S.</footer>
                    </blockquote>
                </div>
            </main>
            <main className='h-screen flex flex-col items-center justify-center w-full'>
                <LoginForm />
            </main>
        </div>
    )
}

export default LoginPage
