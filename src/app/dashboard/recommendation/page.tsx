import Sidebar from '@/constant/Sidebar'
import React from 'react'

const page = () => {
    return (
        <div className='w-full flex'>
            <Sidebar />
            <div className="w-4/5 px-6 ml-auto lg:my-16 py-10 ">
                <h1>recommendation</h1>
            </div>
        </div>
    )
}

export default page
