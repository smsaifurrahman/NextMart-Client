/** @format */

"use client";

import * as React from "react";
import { Bot, Settings, SquareTerminal } from "lucide-react";

import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarRail,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";

import { NavUser } from "./nav-user";
import Link from "next/link";
import Logo from "@/assets/svgs/Logo";

// This is sample data.
const data = {
   navMain: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: SquareTerminal,
        isActive: true,
      //   items: [
      //    {
      //       title: "Home",
      //       url: "/user/dashboard"
      //    }
      //   ]
      },
      {
        title: "Shop",
        url: "/user/shop/products",
        icon: Bot,
        items: [
          {
            title: "Manage Products",
            url: "/user/shop/products",
          },
          {
            title: "Manage Categories",
            url: "/user/shop/category",
          },
          {
            title: "Manage Brands",
            url: "/user/shop/brand",
          },
          {
            title: "Manage Coupons",
            url: "/user/shop/manage-coupon",
          },
        ],
      },
  
      {
        title: "Settings",
        url: "#",
        icon: Settings,
        items: [
          {
            title: "Profile",
            url: "/profile",
          },
        ],
      },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar collapsible="icon" {...props}>
         <SidebarHeader>
            <SidebarMenu>
               <SidebarMenuItem>
                  <SidebarMenuButton size="lg" asChild>
                     <Link href="/">
                        <div className="flex items-center justify-center">
                           <Logo />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                           <h2 className="font-bold text-xl">NextMart</h2>
                        </div>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarHeader>
         <SidebarContent>
            <NavMain items={data.navMain} />
         </SidebarContent>
         <SidebarFooter>
            <NavUser />
         </SidebarFooter>
         <SidebarRail />
      </Sidebar>
   );
}
