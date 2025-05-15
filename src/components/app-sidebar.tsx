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
import {Sparkles} from "lucide-react"
import {NavUser} from "./nav-user"
import {supabase} from "@/lib/supabase"

// This is sample data.



export async function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {


  const {data: {user}} = await supabase.auth.getUser()
  console.log(user)

  const userr = {
    name: user?.user_metadata.name,
    email: user?.email ?? "",
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
        <NavUser user={userr} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
