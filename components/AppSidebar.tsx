import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Compass, GalleryHorizontalEnd, Home, Inbox, LogIn, Search, Settings } from "lucide-react"

export function AppSidebar() {
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
                    <span className="text-green-800 text-2xl font-medium">Bolo</span>
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
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
