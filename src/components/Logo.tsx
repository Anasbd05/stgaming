import {Sparkles} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-2'>
            <Sparkles className='size-8 text-white' strokeWidth={1.5} />
            <span className=' tracking-wide text-lg text-white font-semibold'>Picturia AI </span>
        </Link>
    )
}

export default Logo
