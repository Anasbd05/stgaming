import React from 'react'

const Hero = () => {
    return (
        <div className='md:h-screen mx-auto flex flex-col items-center  py-4 md:py-12 w-full lg:py-14  '>
            <div className='py-1.5 shadow-inset bg-gradient-to-r text-center border border-primary flex gap-4 justify-around items-center  w-2/4 md:w-2/5 my-4 rounded-full px-4'>
                <p className='text-sm text-accent'>-43% off with code <span className='font-semibold'>WYDAD01</span></p>
            </div>
            <h1 className='text-4xl font-semibold tracking-tight font-header md:text-5xl text-center lg:text-7xl '>Transform Your <br /> <span className='bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent'>Gaming Setup with AI!</span></h1>
            <p className='text-sm my-5 max-w-lg md:max-w-xl text-center leading-relaxed '>Turn messy or empty rooms into epic gaming spaces in seconds. Upload a photo and let AI create the ultimate setup for you!</p>
            <div className='py-2 my-5 px-2 w-3/4 md:w-2/5 border border-foreground rounded-lg flex  '>
                <input type="text" autoFocus placeholder='Email address' className='py-1 outline-none px-4 w-full' />
                <button className='py-2 px-5 bg-gradient-to-r cursor-pointer bg-accent text-black rounded-lg'>Subscribe</button>
            </div>
        </div>
    )
}

export default Hero
