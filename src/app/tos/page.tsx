import {terms} from '@/assets/data'
import {ArrowLeft} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='w-full px-5 md:px-0 md:w-2/4 py-10 mx-auto'>
            <Link href={"/"} className='flex hover:bg-neutral-700 w-24 my-4 items-center rounded-lg gap-2 py-2 justify-center' >
                <ArrowLeft className='h-4 w-4' />
                <span>Back</span>
            </Link>
            <div className="flex flex-col gap-5">
                <h1 className='text-2xl md:text-3xl font-semibold capitalize'>Terms of use for setugame</h1>
                <small className='text-base text-gray-200'>Effective Date: 2025-03-15</small>
                <p>These Terms of Service (&quot;Terms&quot;) govern your use of the Setugame website at https://setugame.com (&quot;Website&quot;) and the services provided by Setugame. By using our Website and services, you agree to these Terms.</p>
            </div>

            <main className='flex flex-col gap-2 mt-5'>
                {terms.map((term) => (
                    <div key={term.id}>
                        <h2 className='text-xl font-medium my-2'>{term.title}</h2>
                        <p className='text-gray-300'>{term.desc}</p>

                        <ul>{term.paragraphs?.map((paragraph) => (
                            <li key={paragraph}> - {paragraph}</li>
                        ))} </ul>
                    </div>
                ))}

            </main>

        </section>
    )
}

export default page
