
import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import {
  ShieldCheck,
  Wrench,
  Network,
  Clock,
  Fingerprint,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the comprehensive ICT services offered by Nano Computing ICT Solutions, from network infrastructure to custom software development.',
};

const services = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
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
    imageSrc: '/cctv.jpg',
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
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
    imageSrc: '/computer-repair.jpg',
  },
  {
    icon: <Network className="w-8 h-8 text-primary" />,
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
    imageSrc: '/network-design.jpg',
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
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
    imageSrc: '/time-attendance.jpg',
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-primary" />,
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
    imageSrc: '/access-control.jpg',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="We offer a comprehensive suite of ICT solutions designed to secure and streamline your operations. Explore our professional services below."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.title}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div
                  className={`relative h-80 w-full lg:h-96 ${
                    isReversed ? 'md:order-last' : ''
                  }`}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="rounded-lg object-cover shadow-xl"
                  />
                </div>
                <div className="prose lg:prose-lg max-w-none text-muted-foreground">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-primary font-headline m-0">
                      {service.title}
                    </h2>
                  </div>
                  <p className="lead">{service.description}</p>
                  <ul className="space-y-2 mt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
