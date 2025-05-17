import Configurations from '@/components/image-gen/Configurations'
import Generated from '@/components/image-gen/Generated'
import React from 'react'

const ImageGenerations = () => {
    return (
        <section className='container justify-around gap-4 flex w-full items-start overflow-hidden '>
            <Configurations />
            <div className="w-2/4 p-4 rounded-xl flex items-center justify-center h-fit">
                < Generated />
            </div >
        </section >
    )
}

export default ImageGenerations
