import {sidebarLinks} from '@/assets/data'
import {BadgeCent,LogOut} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <section className="flex h-screen w-1/5 flex-col justify-between border-r-[3px] border-pricing">
            <div className='flex flex-col gap-8'>
                <main className='flex gap-2 border-b border-pricing items-center py-4 px-4'>
                    <Image alt='' src={"/logo.png"} height={70} width={70} />
                    <h2 className='text-3xl font-bold  text-gray-200 font-header'>Stgaming</h2>
                </main>

                <ul className="flex flex-col  border-pricing px-4 py-2.5 gap-2">
                    {sidebarLinks.map((item) => (
                        <Link className='py-2.5 px-4 hover:bg-foreground  flex items-center gap-3 rounded-lg' href={item.link} key={item.name}>
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </ul>

                <details className="group border-t border-pricing py-2.5 [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer mx-4 items-center justify-between rounded-lg px-4 py-3 text-gray-300 hover:bg-primary hover:text-white"
                    >
                        <span className="text-sm font-medium"> Account </span>
                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <ul className="mt-2 px-4">

                        <Link
                            href="dashboard/subscription"
                            className="py-2.5 px-4 hover:bg-foreground  flex items-center gap-3 rounded-lg">
                            <BadgeCent className='w-5 h-5' />
                            Subscription
                        </Link>
                        <Link
                            href="logout"
                            className="py-2.5 px-4 hover:bg-red-100 hover:text-red-600  flex items-center gap-3 rounded-lg">
                            <LogOut className='w-5 h-5' />
                            Logout
                        </Link>


                    </ul>
                </details>
            </div>
            <div className="flex items-center bg-pricing py-4 gap-1.5 px-4">
                <Image src={"/profile.jpg"} className='rounded-full' alt='' height={45} width={45} />
                <div className="flex flex-col">
                    <h3 className=' font-medium font-header'>Anas-bd</h3>
                    <p className='text-sm text-gray-300'>scofield.bd05@gmail.com</p>
                </div>
            </div>


        </section>
    )
}

export default Sidebar
