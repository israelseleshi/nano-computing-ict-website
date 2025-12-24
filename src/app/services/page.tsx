import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Server,
  Wifi,
  Lock,
  Video,
  Phone,
  Database,
  ShieldCheck,
  Zap,
  Code2,
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ServicesSummary from './_components/services-summary';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the comprehensive ICT services offered by Nano Computing ICT Solutions, from network infrastructure to custom software development.',
};

const services = [
  {
    icon: <Server className="w-7 h-7 text-primary" />,
    title: 'Structured Cabling Solution',
    description: 'We provide end-to-end network solutions including survey, design, implementation, and maintenance for robust and reliable connectivity.',
    imageId: 'service-1'
  },
  {
    icon: <Wifi className="w-7 h-7 text-primary" />,
    title: 'Wireless Networking Solution',
    description: 'Design and deployment of high-performance, scalable wireless networks for enterprises, campuses, and public venues.',
    imageId: 'service-2'
  },
  {
    icon: <Lock className="w-7 h-7 text-primary" />,
    title: 'Network Security Solution',
    description: 'Comprehensive security strategies including firewalls, VPNs, and intrusion detection to protect your digital assets.',
    imageId: 'service-3'
  },
  {
    icon: <Video className="w-7 h-7 text-primary" />,
    title: 'Video Conference Solution',
    description: 'State-of-the-art video conferencing systems that enable seamless communication and collaboration across geographical boundaries.',
    imageId: 'service-5'
  },
  {
    icon: <Phone className="w-7 h-7 text-primary" />,
    title: 'IP Telephony Solution',
    description: 'Modern, scalable, and feature-rich IP telephony solutions to streamline your business communication.',
    imageId: 'service-6'
  },
  {
    icon: <Database className="w-7 h-7 text-primary" />,
    title: 'Server and Storage Solution',
    description: 'Customized server and storage solutions including virtualization, data backup, and disaster recovery planning.',
    imageId: 'service-4'
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: 'Data Center Solution',
    description: 'End-to-end data center design, implementation, and maintenance for optimal performance and reliability.',
    imageId: 'service-4'
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: 'Power Solution',
    description: 'Uninterruptible Power Supply (UPS) and power management solutions to ensure your critical systems are always online.',
    imageId: 'service-1'
  },
  {
    icon: <Code2 className="w-7 h-7 text-primary" />,
    title: 'Software Development',
    description: 'Custom software, web applications, and mobile apps tailored to your specific business requirements.',
    imageId: 'service-3'
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="We offer a comprehensive suite of ICT services designed to enhance your business operations, improve security, and drive growth."
      />
      <div className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ServicesSummary />
        </div>
      </div>
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
                const image = PlaceHolderImages.find(img => img.id === service.imageId);
                return (
                    <Card key={service.title} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        {image && (
                            <div className="relative h-48 w-full">
                                <Image src={image.imageUrl} alt={service.title} data-ai-hint={image.imageHint} fill className="object-cover" />
                            </div>
                        )}
                        <CardHeader className="flex flex-row items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-md mt-1">{service.icon}</div>
                            <div>
                                <CardTitle>{service.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                )
            })}
          </div>
        </div>
      </section>
    </>
  );
}
