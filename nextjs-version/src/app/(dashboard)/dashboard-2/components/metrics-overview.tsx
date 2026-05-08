"use client"

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  BarChart3
} from "lucide-react"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ja } from "@/i18n/ja"

const t = ja.dashboard2

const metrics = [
  {
    title: t.totalRevenue,
    value: "$54,230",
    description: t.monthlyRevenue,
    change: "+12%",
    trend: "up" as const,
    icon: DollarSign,
    footer: t.trendUp,
    subfooter: t.revenueDesc,
  },
  {
    title: t.activeCustomers,
    value: "2,350",
    description: t.totalActiveUsers,
    change: "+5.2%",
    trend: "up" as const,
    icon: Users,
    footer: t.strongRetention,
    subfooter: t.engagementExceeds,
  },
  {
    title: t.totalOrders,
    value: "1,247",
    description: t.ordersThisMonth,
    change: "-2.1%",
    trend: "down" as const,
    icon: ShoppingCart,
    footer: t.trendDown,
    subfooter: t.orderVolumeNote,
  },
  {
    title: t.conversionRate,
    value: "3.24%",
    description: t.avgConversion,
    change: "+8.3%",
    trend: "up" as const,
    icon: BarChart3,
    footer: t.steadyIncrease,
    subfooter: t.meetsProjections,
  },
]

export function MetricsOverview() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs grid gap-4 sm:grid-cols-2 @5xl:grid-cols-4">
      {metrics.map((metric) => {
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown

        return (
          <Card key={metric.title} className=" cursor-pointer">
            <CardHeader>
              <CardDescription>{metric.title}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {metric.value}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <TrendIcon className="h-4 w-4" />
                  {metric.change}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {metric.footer} <TrendIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                {metric.subfooter}
              </div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
