"use client";

import {sidebarLinks} from "@/assets/data";
import {supabase} from "@/lib/supabase";
import {BadgeCent,LogOut,UserCircle} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname,useRouter} from "next/navigation";
import React,{useEffect,useState} from "react";
import {toast} from "react-toastify";

const Sidebar = () => {

    const router = useRouter()

    const [loading,setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        const {error} = await supabase.auth.signOut();
        if(error) {
            toast.error("Logout failed");
        } else {
            router.push('/')
        }
        setLoading(false);
    };

    const pathname = usePathname();


    const [user,setUser] = useState()

    const GetUser = async () => {
        const {data,error} = await supabase.auth.getSession()
        if(data) {
            setUser(data.session?.user)
            console.log(data.session?.user)
        } if(error) {
            console.log('Failed to fetch data')
        }
    }
    useEffect(() => {
        GetUser()
    },[])

    return (
        <section className="lg:flex h-screen hidden lg:fixed lg:w-1/5 flex-col justify-around bg-black  ">
            <div className="flex flex-col gap-8">
                <Link href={"/"} className="flex gap-2 border-b border-pricing items-center py-4 px-4">
                    <Image alt="Logo Stgaming" src="/logo.png" height={70} width={70} />
                    <h2 className="text-3xl font-bold text-gray-200 font-header">Stgaming</h2>
                </Link>
                <ul className="flex flex-col border-pricing px-4 py-2.5 gap-2">
                    {sidebarLinks.map((item) => (
                        <li key={item.name}>
                            <Link
                                className={`py-2.5 px-4 hover:bg-pricing flex items-center gap-3 rounded-lg ${pathname === item.link ? "bg-pricing " : ""}`}
                                href={item.link}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <details className="group border-t border-pricing py-2.5 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer mx-4 items-center justify-between rounded-lg px-4 py-3 text-gray-300 hover:bg-primary hover:text-white">
                        <span className="text-sm font-medium">Account</span>
                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <ul className="mt-2 px-4">
                        <li>
                            <Link href="/dashboard/subscription" className="py-2.5 px-4 hover:bg-pricing flex items-center gap-3 rounded-lg">
                                <BadgeCent className="w-5 h-5" />
                                Subscription
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="py-2.5 px-4 w-full flex items-center gap-3 rounded-lg cursor-pointer hover:bg-red-100 hover:text-red-600 transition"
                                disabled={loading}>
                                <LogOut className="w-5 h-5" />
                                {loading ? "Logging out..." : "Logout"}
                            </button>
                        </li>
                    </ul>
                </details>
            </div>

            <div className="flex items-center border-t border-pricing py-4 gap-1.5 px-2">
                {
                    user && <Image className='rounded-full ' width={40} height={40} alt='' src={user.user_metadata.avatar_url || "/user.png"} />
                }
                <div className="flex flex-col">
                    <h3 className="font-medium font-header">
                        {user ? user.user_metadata.name : ""}
                    </h3>
                    <p className="text-sm text-gray-300">
                        {user && user.user_metadata.email}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
