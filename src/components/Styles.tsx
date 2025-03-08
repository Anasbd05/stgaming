import {styles} from '@/assets/data'
import Image from 'next/image'
import React from 'react'

const Styles = () => {
    return (
        <div className='flex flex-col w-full items-center py-4 md:py-12 lg:py-10'>
            <h1 className='text-4xl font-semibold tracking-tight font-header md:text-5xl text-center lg:text-7xl'>Explore Our
                <span className='bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent'> Styles</span>
            </h1>
            <p className='text-sm my-5 max-w-lg md:max-w-xl text-center leading-relaxed '>
                Find the perfect style to transform your space, from sleek modern designs to vibrant gaming rooms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full px-8 md:grid-cols-3">
                {styles.map((style) => (
                    <div className='bg-foreground flex rounded-md justify-between group flex-col w-4/4' key={style.title}>
                        <Image
                            alt=''
                            src={style.image}
                            height={400}
                            width={400}
                            className='object-cover w-full rounded-md p-4 group-hover:p-0  duration-500 h-80'
                        />
                        <div className="flex items-center  justify-between p-4 ">
                            <h2 className='text-xl font-bold tracking-wide underline decoration-4 underline-offset-6 decoration-primary '>{style.title}</h2>
                            <p className='text-secondary font-header'>{style.bestFor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Styles
