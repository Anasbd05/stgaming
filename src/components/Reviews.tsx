import {reviews} from '@/assets/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reviews = () => {
    return (
        <div id='reviews' className='flex flex-col items-center py-4 md:py-12 w-full lg:py-14 bg-foreground'>
            <h1 className='text-4xl font-semibold tracking-tight font-header md:text-5xl text-center lg:text-7xl'>What
                <span className='bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent'> Gamers </span>
                Say
            </h1>
            <p className='text-sm my-5 max-w-lg md:max-w-xl text-center leading-relaxed '>
                See how gamers around the world are transforming their setups with AI-powered designs!
            </p>

            <section className='grid md:px-6 sm:px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 '>
                {
                    reviews.map((review) => (
                        <main key={review.name} className='p-6 bg-background flex flex-col justify-between shadow-md shadow-black/30 rounded-xl' >
                            <p className='leading-relaxed text-sm sm:text-base'>{review.comment}</p>
                            <div className="flex mt-6 items-center gap-3">
                                <Image alt='' src={"/profile.jpg"} className='rounded-full w-10 h-10 ' height={40} width={40} />
                                <div className="flex flex-col">
                                    <h1 className='text-sm md:text-base'>{review.name}</h1>
                                    <h3 className='text-xs sm:text-sm tracking-wider sm:font-header text-gray-300'>@{review.username}</h3>
                                </div>
                                <Link className='ml-auto hidden sm:flex ' href={review.profileLink}>{review.socialMedia}</Link>
                            </div>
                        </main>
                    ))
                }
            </section>
        </div>
    )
}

export default Reviews
