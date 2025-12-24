
import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the comprehensive ICT services offered by Nano Computing ICT Solutions, from network infrastructure to custom software development.',
};

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
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div
                className={`prose lg:prose-lg max-w-none text-muted-foreground ${
                  index % 2 !== 0 ? 'md:col-start-2' : ''
                }`}
              >
                <h2 className="text-3xl font-bold text-primary font-headline">
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <ul className="space-y-2 mt-6 pl-0">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start !pl-0">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative h-80 w-full lg:h-96 ${
                  index % 2 !== 0 ? 'md:col-start-1' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
