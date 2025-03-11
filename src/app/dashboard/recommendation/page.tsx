import {products} from '@/assets/data'
import Sidebar from '@/constant/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='w-full flex'>
            <Sidebar />
            <main className="w-4/5 rounded-lg px-1 ml-auto lg:my-16 ">
                <div className='flex w-full justify-between px-2'>
                    <h1 className='text-xl font-bold w-3/5'>Ultimate Gaming Setup Recommendations: Elevate Your Experience</h1>
                    <input type="text" placeholder='Search...' className='py-1.5 w-2/5 px-3 border border-primary outline-none rounded-lg' />
                </div>

                {/* products */}
                <div className=" mt-10 grid grid-cols-2 md:grid-cols-3  gap-5">
                    {
                        products.map((product) => (
                            <Link key={product.id} className='rounded-md border border-primary p-3' href={""} >
                                < Image height={300} width={300} alt='' className='w-full h-72' src={product.image} />
                                <div className="flex mt-3 items-center justify-between px-1">
                                    <h1 className='text-lg  font-semibold'>{product.title} </h1>
                                    <p className='text-gray-200'>${product.price}</p>
                                </div>
                                <p className='text-sm px-1 text-gray-300 mt-1'>{product.shortDesc}</p>
                            </Link>
                        ))
                    }
                </div>



            </main>
        </section >
    )
}

export default page
