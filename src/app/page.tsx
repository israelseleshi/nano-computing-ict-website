'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Lock, Users, CheckCircle2 } from 'lucide-react';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MacbookScroll } from '@/components/ui/macbook-scroll';

const services = [
  {
    image: '/cctv-camera.png',
    title: 'CCTV Security System',
    description:
      'Comprehensive security camera systems to protect your business and residential properties.',
    points: [
      'Complete facility security coverage',
      'Protection from burglary and damages',
      'Professional installation and setup',
      'Residential and commercial solutions',
      '24/7 monitoring and surveillance',
    ],
  },
  {
    image: '/computer-repair.png',
    title: 'Computer Repair Service',
    description:
      'Professional computer and networking services for residential and business customers with expert technicians.',
    points: [
      'Comprehensive setup and troubleshooting support',
      'Maintenance and training across all systems',
      'Onsite repair services at your location',
      'Expert technicians with industry experience',
      'Support for wide variety of computer systems',
    ],
  },
  {
    image: '/door-access-control-systems.png',
    title: 'Door Access Control',
    description:
      'Advanced access control systems for secure entry management and monitoring.',
    points: [
      'Biometric authentication systems',
      'Remote access management and control',
      'Real-time monitoring and alerts',
      'Integration with existing security systems',
      'Scalable solutions for any facility size',
    ],
  },
  {
    image: '/time-attendance.png',
    title: 'Time & Attendance System',
    description:
      'Modern time tracking and attendance management systems for accurate workforce monitoring.',
    points: [
      'Accurate employee work hour tracking',
      'Sick leave and time-off monitoring',
      'Employee performance analytics',
      'Modern digital attendance solutions',
      'Comprehensive reporting systems',
    ],
  },
  {
    image: '/computer-network.png',
    title: 'Computer Network Design and Installation',
    description:
      'Professional network infrastructure design and installation to enhance your workforce productivity.',
    points: [
      'Business-critical application optimization',
      'Secure internet access solutions',
      'Mobile workforce connectivity',
      'Guest Wi-Fi network setup',
      'Secure and accessible network design',
    ],
  },
];

const testimonials = [
  {
    name: 'Abebe Bikila',
    title: 'CEO of Ethio Telecom',
    quote: 'Nano Computing ICT Solutions transformed our IT infrastructure. Their expertise and dedication are unparalleled. We\'ve seen a significant improvement in our network performance and security.',
    avatar: 'AB',
  },
  {
    name: 'Liya Kebede',
    title: 'Project Manager at Ministry of Innovation',
    quote: 'The team at Nano Computing ICT Solutions is professional, responsive, and highly skilled. They delivered our project on time and within budget, exceeding all our expectations.',
    avatar: 'LK',
  },
  {
    name: 'Samuel Tsegaye',
    title: 'IT Director at Ethiopian Airlines',
    quote: 'Working with Nano Computing ICT Solutions has been a game-changer. Their innovative solutions have streamlined our operations and provided us with a competitive edge.',
    avatar: 'ST',
  },
  {
    name: 'Hana Girma',
    title: 'CTO, Zemen Bank',
    quote: 'The seamless integration of their cloud solutions was impressive. Downtime was minimal, and the performance boost was immediate. A truly professional team.',
    avatar: 'HG',
    },
  {
    name: 'Daniel Bekele',
    title: 'Head of Security, Awash Bank',
    quote: 'Their network security audit was incredibly thorough. They identified vulnerabilities we were completely unaware of and helped us fortify our defenses. I can sleep better at night.',
    avatar: 'DB',
    },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <div className="flex flex-col">
       <section className="bg-background overflow-hidden">
        <MacbookScroll 
          src="/nano-tech-office-display.mp4" 
          showGradient={false}
        />
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl font-headline">Our Core Services</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We provide a wide range of ICT solutions to meet your business needs.
                </p>
              </div>
              <div className="flex gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                   <div className="p-1">
                   <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-4">
                        <div className="relative h-80 w-full lg:h-96">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="rounded-lg object-cover"
                        />
                        </div>
                        <div className="prose lg:prose-lg max-w-none text-muted-foreground">
                        <h3 className="text-2xl font-bold text-primary font-headline">
                            {service.title}
                        </h3>
                        <p>{service.description}</p>
                        <ul className="space-y-2 mt-6 pl-0 text-sm">
                            {service.points.map((point) => (
                            <li key={point} className="flex items-start !pl-0">
                                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                   </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl font-headline">Why Choose Nano Computing ICT Solutions?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are a team of dedicated ICT professionals with a passion for technology and a commitment to our clients' success.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit"><Users className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-lg">Client-Centric Approach</h3>
                    <p className="text-muted-foreground">We prioritize your needs, delivering tailored solutions that drive results and foster long-term partnerships.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit"><Lock className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-lg">Proven Expertise</h3>
                    <p className="text-muted-foreground">With over a decade of experience, we have a track record of success with both government and private sector clients.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 w-full lg:h-96">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  data-ai-hint={heroImage.imageHint}
                  className="rounded-lg object-cover shadow-xl"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl font-headline">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real stories from businesses we've helped to empower.
            </p>
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="w-full mt-12"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col bg-secondary/30 h-full">
                      <CardContent className="p-6 flex-grow">
                        <blockquote className="text-lg text-muted-foreground border-l-4 border-primary pl-4 italic">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>
                      </CardContent>
                      <CardHeader className="flex flex-row items-center gap-4 p-6 pt-0 mt-auto">
                        <Avatar className="w-14 h-14 border-2 border-primary">
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.title}</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="h-12 w-12" />
              <CarouselNext className="h-12 w-12" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
