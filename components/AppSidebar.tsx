"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ArrowBigDownDash, ArrowBigRightDashIcon, ArrowBigRightIcon, ArrowUpRight, Compass, GalleryHorizontalEnd, Home, LogIn } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export function AppSidebar() {

    const path = usePathname()
    const items = [
        {
            title: "Home",
            path: "/",
            icon: Home,
        },
        {
            title: "Discover",
            path: "/discover",
            icon: Compass,
        },
        {
            title: "Library",
            path: "/library",
            icon: GalleryHorizontalEnd,
        },
        {
            title: "Login",
            path: "/login",
            icon: LogIn,
        },

    ]


    return (
        <Sidebar>
            <SidebarHeader className="flex place-items-center">
                <div className="flex">
                    <span className="text-[#008189] text-2xl font-medium">Bolo</span>
                    <span className="text-2xl font-thin">Beta.ai</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className={`hover:bg-transparent hover:font-bold ${path?.includes(item.path) && 'font-bold'}`}>
                                        <Link href={item.path}>
                                            <item.icon />
                                            <span >{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <Button className="rounded-full px-8 mt-4 mx-7" size={"sm"} variant={"default"}>
                            Sign Up
                        </Button>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter >

                <div>
                    <p className="font-semibold text-xs text-gray-600">Try Pro</p>
                    <p className="text-[.6rem] text-gray-400">
                        Upgrade for image upload, smarter AI, and more Copilot.    </p>
                </div>
                <Button variant={"outline"} className="cursor-pointer py-0 px-2">
                    <ArrowUpRight /> Learn More
                </Button>
            </SidebarFooter>

        </Sidebar>
    )
}
