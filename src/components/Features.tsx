import React from 'react'
import features from "../assets/data"

const Features = () => {
    return (
        <div id='features' className='h-screen mx-auto flex flex-col items-center py-10 md:py-12 w-full lg:py-14'>
            <h1 className='text-4xl font-semibold tracking-tight font-header md:text-5xl text-center lg:text-7xl'>Game-Changing <span className='bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent'>Features</span> </h1>
            <p className='text-sm my-5 max-w-lg md:max-w-xl text-center leading-relaxed '>
                Transform your space with AI-driven designs, customizable themes,
                and high-quality renders for the ultimate gaming experience!
            </p>


            <div className="flex md:flex-row flex-col w-5/6 gap-4 my-6 mx-auto ">
                <div className='p-4 border-2 md:w-2/5 border-primary rounded-lg'>
                    <h1 className='text-3xl font-semibold tracking-wide bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent my-4'>Why Stgaming?</h1>
                    <div className="flex flex-col gap-5">
                        <p className='text-sm leading-relaxed text-gray-300'>
                            At Stgaming , we believe every gamer deserves an epic setup. Our AI-powered platform transforms
                            messy or empty rooms into stunning gaming spaces in seconds.
                        </p>
                        <p className='text-sm leading-relaxed text-gray-300'>
                            Whether you want a futuristic,
                            RGB-lit battlestation or a sleek minimal setup, our AI generates high-quality designs tailored to your style.
                            No more guesswork—just upload a photo, choose a theme, and watch AI bring your dream gaming setup to life!
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:w-3/5 gap-4">
                    {features.map((feature) => (
                        <div key={feature.id} className='p-4 border flex flex-col justify-around border-primary rounded-lg hover:scale-105 duration-300'>
                            <div className="flex items-center gap-2">
                                {feature.icon}
                                <h1 className='text-xl font-bold font-header'>{feature.title}</h1>
                            </div>
                            <p className='text-sm leading-relaxed my-2 text-gray-300'>{feature.paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}

export default Features
