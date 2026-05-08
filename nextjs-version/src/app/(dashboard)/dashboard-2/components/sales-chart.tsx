"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ja } from "@/i18n/ja"

const t = ja.dashboard2

const salesData = [
  { month: "1月", sales: 12500, target: 15000 },
  { month: "2月", sales: 18200, target: 15000 },
  { month: "3月", sales: 16800, target: 15000 },
  { month: "4月", sales: 22400, target: 20000 },
  { month: "5月", sales: 24600, target: 20000 },
  { month: "6月", sales: 28200, target: 25000 },
  { month: "7月", sales: 31500, target: 25000 },
  { month: "8月", sales: 29800, target: 25000 },
  { month: "9月", sales: 33200, target: 30000 },
  { month: "10月", sales: 35100, target: 30000 },
  { month: "11月", sales: 38900, target: 35000 },
  { month: "12月", sales: 42300, target: 35000 },
]

const chartConfig = {
  sales: {
    label: t.salesLabel,
    color: "var(--primary)",
  },
  target: {
    label: t.targetLabel,
    color: "var(--primary)",
  },
}

export function SalesChart() {
  const [timeRange, setTimeRange] = useState("12m")

  return (
    <Card className="cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>{t.salesPerformance}</CardTitle>
          <CardDescription>{t.monthlySalesVsTargets}</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-36 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m" className="cursor-pointer">{t.last3Months}</SelectItem>
              <SelectItem value="6m" className="cursor-pointer">{t.last6Months}</SelectItem>
              <SelectItem value="12m" className="cursor-pointer">{t.last12Months}</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="cursor-pointer">
            {t.export}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 pt-6">
        <div className="px-6 pb-6">
          <ChartContainer config={chartConfig} className="h-[350px] w-full">
            <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-sales)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="var(--color-sales)" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-target)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="var(--color-target)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                className="text-xs"
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-xs"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="target"
                stackId="1"
                stroke="var(--color-target)"
                fill="url(#colorTarget)"
                strokeDasharray="5 5"
                strokeWidth={1}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stackId="2"
                stroke="var(--color-sales)"
                fill="url(#colorSales)"
                strokeWidth={1}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
