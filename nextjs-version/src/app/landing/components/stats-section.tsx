"use client"

import {
  Package,
  Download,
  Users,
  Star
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { DotPattern } from '@/components/dot-pattern'
import { ja } from '@/i18n/ja'

const t = ja.landing.stats

const statIcons = [Package, Download, Users, Star]
const statValues = ['500+', '25K+', '10K+', '4.9']

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 relative">
      {/* Background with transparency */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-secondary/20" />
      <DotPattern className="opacity-75" size="md" fadeStyle="circle" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.items.map((stat, index) => {
            const Icon = statIcons[index]
            return (
              <Card
                key={index}
                className="text-center bg-background/60 backdrop-blur-sm border-border/50 py-0"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {statValues[index]}
                    </h3>
                    <p className="font-semibold text-foreground">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
