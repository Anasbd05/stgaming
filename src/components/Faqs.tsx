import {faqs} from '@/assets/data'
import React from 'react'

const Faqs = () => {
    return (
        <div id='faq' className='flex flex-col md:flex-row items-start gap-2 px-5 py-4 md:py-12 w-full lg:py-10'>
            <div className=" w-full flex my-2 flex-col items-center md:items-start gap-2 md:w-3/6">
                <small className='text-accent'>FAQ</small>
                <h1 className=' text-3xl font-header sm:text-4xl lg:text-5xl'>Frequently Asked Questions</h1>
            </div>
            <div className="w-full md:w-3/6">
                <div className="join join-vertical">
                    {faqs.map((faq) => (
                        <div key={faq.answer} className="collapse collapse-arrow join-item  border-b-[0.5px] border-accent">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <h3 className="collapse-title font-medium tracking-wider">
                                {faq.question}
                            </h3>
                            <p className="collapse-content text-gray-300 leading-relaxed text-sm">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faqs
