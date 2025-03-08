import {pricingPlans} from '@/assets/data'
import {Check,MoveRight} from 'lucide-react'
import React from 'react'

const Pricing = () => {
    return (
        <div id='pricing' className='flex flex-col items-center py-4 md:py-12 w-full lg:py-10'>
            <h1 className='text-4xl font-semibold tracking-tight font-header md:text-5xl text-center lg:text-7xl'>Flexible Plans for
                <span className='bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent'> Every Gamer</span>
            </h1>
            <p className='text-sm my-5 max-w-lg md:max-w-xl text-center leading-relaxed '>
                Choose a plan that fits your needs
            </p>
            <section className='grid grid-cols-1 md:grid-cols-2 w-full px-6 md:px-5 lg:grid-cols-3 gap-8'>
                {pricingPlans.map((pricing) => (
                    <main className={`p-8 px-10 bg-pricing rounded-lg  flex flex-col  justify-between shadow-md shadow-pricing items-start ${pricing.title === "One-Time" && "border-2 border-primary"} `} key={pricing.price}>
                        <small className='py-0.5 px-4 bg-primary ml-auto text-white font-semibold rounded-full'>43% Off </small>
                        <div className="flex items-center gap-3">
                            <h2 className='text-xl my-2 font-semibold tracking-wider'>{pricing.title}</h2>
                            {pricing.title === "One-Time" &&
                                <small className='py-0.5 px-4 bg-accent  text-white font-bold tracking-wider rounded-full'>Most popular</small>
                            }
                        </div>
                        <p className='text-sm mb-3  text-gray-300'>{pricing.bestFor}</p>
                        <h1 className='text-xl my-4'>
                            <span className='font-bold text-5xl font-header'>{pricing.price}</span>
                            <span className='text-gray-300 text-sm mx-1'>{pricing.duration}</span>
                        </h1>

                        <ul className='flex flex-col my-7 gap-3'>
                            {pricing.features.map((feature) => (
                                <li className='flex gap-2 items-center' key={feature}>
                                    <Check className='w-5 h-5 text-primary' />
                                    <p className='font-thin'>{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <button className='py-3 mb-3 cursor-pointer hover:opacity-85 flex items-center gap-1 justify-center font-medium w-full bg-primary rounded-md'>{pricing.buttonText}
                            <MoveRight className='w-5 h-5 mx-0.5 ' />
                        </button>
                        {pricing.title === "One-Time" &&
                            <p className='text-xs text-center mx-auto text-gray-300 '>
                                One-time payment, then <span className='animation-text'>it&lsquo;s yours forever</span>
                            </p>
                        }
                    </main>
                ))}
            </section>
        </div>
    )
}

export default Pricing
