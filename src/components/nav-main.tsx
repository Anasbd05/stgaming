"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {

  CreditCard,
  Frame,
  Image,
  Images,
  Settings,
  SquareTerminal,
} from "lucide-react"

export function NavMain() {

  const pathname = usePathname()

  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal
    },
    {
      title: "Generate Image",
      url: "/image_gen",
      icon: Image
    },
    {
      title: "My Modal",
      url: "/modal",
      icon: Frame
    },
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCard
    },
    {
      title: "My images",
      url: "/gallary",
      icon: Images
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings
    },
  ]


  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Link href={item.url} key={item.title} className={`rounded-none ${pathname === item.url ? "text-primary bg-primary/5" : "text-muted-foreground"} `}>
            < SidebarMenuItem >
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))
        }
      </SidebarMenu >
    </SidebarGroup >
  )
}
