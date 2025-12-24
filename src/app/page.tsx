import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cloud, Lock, Server, Users, Wifi } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Spotlight } from '@/components/ui/spotlight';

const services = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Structured Cabling',
    description: 'End-to-end network solutions including survey, design, implementation, and maintenance.',
  },
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: 'Wireless Networking',
    description: 'Robust and scalable wireless solutions for seamless connectivity.',
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'Network Security',
    description: 'Protecting your digital assets with state-of-the-art security protocols and firewalls.',
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: 'Cloud & Data Center',
    description: 'Modern data center solutions with high availability and server virtualization.',
  },
];

const testimonials = [
  {
    name: 'John Doe, CEO of Robi',
    quote: 'NanoVision transformed our IT infrastructure. Their expertise and dedication are unparalleled. We\'ve seen a significant improvement in our network performance and security.',
  },
  {
    name: 'Jane Smith, Project Manager at a2i',
    quote: 'The team at NanoVision is professional, responsive, and highly skilled. They delivered our project on time and within budget, exceeding all our expectations.',
  },
  {
    name: 'Samuel Green, IT Director at Bangladesh Army',
    quote: 'Working with NanoVision has been a game-changer. Their innovative solutions have streamlined our operations and provided us with a competitive edge.',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Innovating The Future</div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Powering Your Digital Transformation
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Nano Computing ICT Solutions delivers cutting-edge technology and expert guidance to propel your business forward.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl font-headline">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide a wide range of ICT solutions to meet your business needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">{service.icon}</div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl font-headline">Why Choose NanoVision?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are a team of dedicated ICT professionals with a passion for technology and a commitment to our clients&apos; success.
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
              Real stories from businesses we&apos;ve helped to empower.
            </p>
          </div>
          <Carousel className="mt-12 w-full max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name}>
                  <div className="p-2">
                    <Card className="bg-secondary/50">
                      <CardContent className="p-8 text-center">
                        <p className="text-lg italic">&quot;{testimonial.quote}&quot;</p>
                        <p className="mt-6 font-semibold text-primary">— {testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
