import * as React from "react"
import {NavMain} from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import {Sparkles,User} from "lucide-react"
import {createClient} from "@supabase/supabase-js"
import {NavUser} from "./nav-user"

// This is sample data.



export async function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {

  const supabase = await createClient()
  const {data} = await supabase.auth.getUser()


  const user = {
    name: data.user?.user_metadata.full_name,
    email: data.user?.email ?? "",
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Sparkles className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Picturia Ai</span>
            <span className="truncate text-xs">Pro</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
