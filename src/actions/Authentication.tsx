import {supabase} from "@/lib/supabase"
import {redirect} from "next/navigation"

const Logout = async () => {
    await supabase.auth.signOut()
    redirect('/login')
}

export default Logout
