import {  Home, Settings, User, LayoutDashboard, Send, Folder } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



// Menu items.
// const items = [
//   {
//     title: "Home",
//     url: "/",
//     icon: Home,
//   },
//   {
//     title: "Dashboard",
//     url: "/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Posts",
//     url: "/posts",
//     icon: Send,
//   },
//   {
//     title: "Categories",
//     url: "#",
//     icon: Folder,
//   },
//   {
//     title: "Account",
//     url: "/account",
//     icon: User,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   }
// ]

// export function AppSidebar() {
//   return (
//     <Sidebar className="text-white">
//       <SidebarContent className="bg-primary">
//         <SidebarGroup>
//           <SidebarGroupLabel className="text-xl text-white">Dashboard Menu</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   )
// }



const menuGroups = [
  {
    label: "Main",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Content",
    items: [
      { title: "Posts", url: "/posts", icon: Send },
      { title: "Categories", url: "/categories", icon: Folder },
    ],
  },
  {
    label: "User",
    items: [
      { title: "Account", url: "/account", icon: User },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
];



export function AppSidebar() {
  return (
    <Sidebar className="text-white">
      <SidebarContent className="bg-primary">
        <SidebarGroupLabel className="text-xl text-white">
          Dashboard Menu
        </SidebarGroupLabel>
        {menuGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-xl text-white">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center space-x-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
