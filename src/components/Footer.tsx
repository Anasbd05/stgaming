import React from 'react'

const Footer = () => {
    return (
        <footer className="flex flex-col gap-5 items-center bg-foreground py-10">
            <section className='footer sm:footer-horizontal px-10'>
                <nav>
                    <h6 className="footer-title font-bold tracking-wide text-lg">Links</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Styles</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-bold tracking-wide text-lg">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Faqs</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-bold tracking-wide text-lg">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
                <form>
                    <h6 className="footer-title font-bold tracking-wide text-lg">Newsletter</h6>
                    <div className="w-80">
                        <label>Enter your email address</label>
                        <div className="py-1 border border-gray-500 my-2 flex justify-between items-center px-2 rounded-md ">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="py-1 px-3 outline-none " />
                            <button className="bg-accent text-black hover:opacity-80 font-medium tracking-wide rounded-md py-2 px-4">Subscribe</button>
                        </div>
                    </div>
                </form>
            </section>
            <hr className='h-[1px] border-none w-full bg-neutral-500 ' />
            <div className="flex justify-around py-4 w-full items-center">
                <p className='text-gray-50'>Copyright © 2025 - All right reserved by <span className='font-bold tracking-wide'>Stgaming</span> </p>
                <small className='text-sm text-gray-300 tracking-wide'>Hey 🖐 it&#39;s me &nbsp;
                    <a className='underline' target='-blank' href="https://x.com/Anas_bd01">Anas</a>&nbsp;
                    the founder wish you the best
                </small>
            </div>
        </footer>
    )
}

export default Footer
