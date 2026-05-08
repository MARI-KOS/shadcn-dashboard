"use client"

import * as React from "react"
import {
  LayoutPanelLeft,
  LayoutDashboard,
  Mail,
  CheckSquare,
  MessageCircle,
  Calendar,
  Shield,
  AlertTriangle,
  Settings,
  HelpCircle,
  CreditCard,
  LayoutTemplate,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { SidebarNotification } from "@/components/sidebar-notification"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { ja } from "@/i18n/ja"

const t = ja.sidebar
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "ShadcnStore",
    email: "store@example.com",
    avatar: "",
  },
  navGroups: [
    {
      label: t.groups.dashboards,
      items: [
        { title: t.nav.dashboard1, url: "/dashboard",   icon: LayoutDashboard },
        { title: t.nav.dashboard2, url: "/dashboard-2", icon: LayoutPanelLeft },
      ],
    },
    {
      label: t.groups.apps,
      items: [
        { title: t.nav.mail,      url: "/mail",      icon: Mail },
        { title: t.nav.tasks,     url: "/tasks",     icon: CheckSquare },
        { title: t.nav.chat,      url: "/chat",      icon: MessageCircle },
        { title: t.nav.calendar,  url: "/calendar",  icon: Calendar },
        { title: t.nav.users,     url: "/users",     icon: Users },
      ],
    },
    {
      label: t.groups.pages,
      items: [
        {
          title: t.nav.landing,
          url: "/landing",
          target: "_blank",
          icon: LayoutTemplate,
        },
        {
          title: t.nav.authPages,
          url: "#",
          icon: Shield,
          items: [
            { title: t.nav.signIn1,          url: "/sign-in" },
            { title: t.nav.signIn2,          url: "/sign-in-2" },
            { title: t.nav.signIn3,          url: "/sign-in-3" },
            { title: t.nav.signUp1,          url: "/sign-up" },
            { title: t.nav.signUp2,          url: "/sign-up-2" },
            { title: t.nav.signUp3,          url: "/sign-up-3" },
            { title: t.nav.forgotPassword1,  url: "/forgot-password" },
            { title: t.nav.forgotPassword2,  url: "/forgot-password-2" },
            { title: t.nav.forgotPassword3,  url: "/forgot-password-3" },
          ],
        },
        {
          title: t.nav.errors,
          url: "#",
          icon: AlertTriangle,
          items: [
            { title: t.nav.unauthorized,         url: "/errors/unauthorized" },
            { title: t.nav.forbidden,            url: "/errors/forbidden" },
            { title: t.nav.notFound,             url: "/errors/not-found" },
            { title: t.nav.internalServerError,  url: "/errors/internal-server-error" },
            { title: t.nav.underMaintenance,     url: "/errors/under-maintenance" },
          ],
        },
        {
          title: t.nav.settings,
          url: "#",
          icon: Settings,
          items: [
            { title: t.nav.userSettings,    url: "/settings/user" },
            { title: t.nav.accountSettings, url: "/settings/account" },
            { title: t.nav.billing,         url: "/settings/billing" },
            { title: t.nav.appearance,      url: "/settings/appearance" },
            { title: t.nav.notifications,   url: "/settings/notifications" },
            { title: t.nav.connections,     url: "/settings/connections" },
          ],
        },
        { title: t.nav.faqs,    url: "/faqs",    icon: HelpCircle },
        { title: t.nav.pricing, url: "/pricing", icon: CreditCard },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Logo size={24} className="text-current" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{t.appName}</span>
                  <span className="truncate text-xs">{t.appSubtitle}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data.navGroups.map((group) => (
          <NavMain key={group.label} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarNotification />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
