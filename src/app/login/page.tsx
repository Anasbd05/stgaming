"use client"
import {MoveLeft} from "lucide-react"
import Image from "next/image"
import {useRouter} from "next/navigation"
import React,{useState} from "react"
import {supabase} from "../../lib/supabase"
import {toast} from "react-toastify"

const Login = () => {
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false)

    const loginWithGoogle = async () => {

        setLoading(true)
        const {error} = await supabase.auth.signInWithOAuth({
            provider: "google"
        })
        setLoading(false)

        if(error) {
            toast.error("Error! Try again")
        }
    }

    const loginWithEmail = async () => {
        if(!email) {
            toast.error("Please enter a valid email")
            return
        }
        setLoading(true)
        const {error} = await supabase.auth.signInWithOtp({email})
        setLoading(false)
        setEmail('')

        if(error) {
            toast.error("Error! Try again")
        } else {
            toast.success("Check your emails")
        }
    }

    return (
        <section className="h-screen flex flex-col w-4/5 sm:w-3/6 mx-auto md:w-2/5 lg:w-2/6 justify-center">
            <button
                onClick={() => router.back()}
                className="text-lg cursor-pointer font-header flex items-center gap-2 px-3 text-center font-medium text-text hover:bg-gray-200 hover:text-black rounded-md py-2 w-20 my-3"
            >
                <MoveLeft className="w-4 h-4" />
                Back
            </button>

            <main className="flex flex-col p-5 bg-foreground rounded-lg">
                <div className="flex gap-3 items-center justify-center">
                    <Image alt="Logo" draggable={false} src="/logo.png" height={50} width={50} />
                    <h2 className="text-text font-semibold text-2xl">Stgaming</h2>
                </div>

                <div className="flex my-5 flex-col gap-4">
                    <button
                        onClick={loginWithGoogle}
                        disabled={loading}
                        className="py-2 cursor-pointer w-full flex items-center justify-center gap-4 bg-gray-200 hover:bg-neutral-400 text-black font-medium rounded-lg disabled:opacity-50"
                    >
                        <Image src="/google.png" alt="Google" width={25} height={25} />
                        Sign-up with Google
                    </button>

                    <div className="divider divider-primary">OR</div>

                    <div className="flex flex-col">
                        <label className="mb-1">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="email@example.com"
                            className="py-1.5 mb-3 px-3 border border-gray-300 rounded-lg"
                        />
                        <button
                            onClick={loginWithEmail}
                            disabled={loading}
                            className="py-3 cursor-pointer hover:opacity-80 w-full bg-primary text-text font-medium rounded-lg disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Magic Link"}
                        </button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Login
