"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ja } from '@/i18n/ja'

const t = ja.landing.testimonials

type TestimonialData = {
  name: string
  image: string
}

const testimonialData: TestimonialData[] = [
  { name: 'Alexandra Mitchell', image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1' },
  { name: 'James Thompson', image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1' },
  { name: 'Priya Sharma', image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2' },
  { name: 'Robert Kim', image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2' },
  { name: 'Maria Santos', image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3' },
  { name: 'Thomas Anderson', image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3' },
  { name: 'Lisa Chang', image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4' },
  { name: 'Michael Foster', image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4' },
  { name: 'Sophie Laurent', image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-5' },
  { name: 'Daniel Wilson', image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-5' },
  { name: 'Natasha Petrov', image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-6' },
  { name: 'Carlos Rivera', image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-6' },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">{t.badge}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonialData.map((person, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                      alt={person.name}
                      src={person.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {person.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <a href="#" onClick={e => e.preventDefault()} className="cursor-pointer">
                      <h3 className="font-medium hover:text-primary transition-colors">{person.name}</h3>
                    </a>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {t.roles[index]}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{t.quotes[index]}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
