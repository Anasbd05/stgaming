import {Privacy_Policy} from '@/assets/data'
import {ArrowLeft} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Privacy = () => {
    return (
        <section className='w-full px-5 md:px-0 md:w-2/4 py-10 mx-auto'>
            <Link href={"/"} className='flex hover:bg-neutral-700 w-24 my-4 items-center rounded-lg gap-2 py-2 justify-center' >
                <ArrowLeft className='h-4 w-4' />
                <span>Back</span>
            </Link>
            <div className="flex flex-col gap-5 ">
                <h1 className='text-3xl font-semibold'>Privacy Policy For Setugame</h1>
                <small className='text-base text-gray-200'>Effective Date: 2025-03-15</small>
                <p>
                    Welcome to Setugame (&quot;we,&ldquo; &#34;our,&#34; or &ldquo;us&#34;). Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our AI-powered gaming room transformation service.
                </p>
                <p>
                    By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use the Website.
                </p>
            </div>
            <div className='flex flex-col gap-2 mt-5'>
                <h1 className='text-2xl'>1. Information We Collect</h1>
                <h4 className='text-lg'>a. Personal Information</h4>
                <p className='text-gray-300'>When you register for an account or use our service, we may collect the following information:</p>
                <ul className='flex flex-col gap-2'>
                    <li>- Name</li>
                    <li>- Email address</li>
                    <li>- Payment information (processed securely via [Payment Provider])</li>
                    <li>- Account credentials (hashed and secured)</li>
                </ul>
                <h4 className='text-lg'>b. Uploaded Content</h4>
                <ul className='flex flex-col gap-2'>
                    <li>- Images of rooms submitted for AI transformation</li>
                    <li>- User preferences related to room customization</li>
                </ul>
                <h4 className='text-lg'>c. Usage Data</h4>
                <ul className='flex flex-col gap-2'>
                    <li>- IP address</li>
                    <li>- Browser type and device information</li>
                    <li>- Interactions with our service (e.g., features used, time spent, etc.)</li>
                </ul>
            </div>
            <main className="mt-5 flex-col flex gap-3">
                {Privacy_Policy.map((privacy) => (
                    <div key={privacy.id} className="flex gap-2 flex-col">
                        <h1 className="text-2xl">{privacy.title}</h1>
                        <p className="text-gray-300">{privacy.description}</p>
                        <ul className="flex flex-col gap-2">
                            {privacy.paragraphs.map((paragraph) => (
                                <li key={paragraph.id}>- {paragraph.text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </main>

            <p className='text-gray-100 font-semibold text-lg my-5'>By using Setugame, you consent to the terms of this Privacy Policy.</p>
        </section>
    )
}

export default Privacy
