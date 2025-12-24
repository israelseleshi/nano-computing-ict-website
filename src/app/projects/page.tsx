import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Discover a selection of our successful projects and see how we have helped our clients achieve their goals.',
};

const projects = [
  {
    title: 'Nationwide Network Upgrade for Robi',
    client: 'Robi Axiata Limited',
    tags: ['Networking', 'Telecommunication'],
    description: 'Implemented a full-scale upgrade of core network infrastructure across the country to enhance speed and reliability.',
    imageId: 'project-3',
  },
  {
    title: 'Digital Service Platform for a2i',
    client: 'a2i - Aspire to Innovate',
    tags: ['Software Development', 'Government'],
    description: 'Developed a public-facing digital service portal to streamline access to government services for millions of citizens.',
    imageId: 'project-1',
  },
  {
    title: 'Secure Data Center for Bangladesh Army',
    client: 'Bangladesh Army',
    tags: ['Data Center', 'Security', 'Government'],
    description: 'Designed and deployed a state-of-the-art, highly secure data center to support critical military operations.',
    imageId: 'project-4',
  },
  {
    title: 'Enterprise Wireless Solution for a Private University',
    client: 'Leading Private University',
    tags: ['Wireless Networking', 'Education'],
    description: 'Deployed a campus-wide, high-density Wi-Fi network to support thousands of students and faculty members.',
    imageId: 'project-2',
  },
  {
    title: 'IP Telephony System for a Corporate Head-Office',
    client: 'Multinational Corporation',
    tags: ['IP Telephony', 'Communication'],
    description: 'Upgraded the legacy phone system to a modern IP telephony solution, improving communication and reducing costs.',
    imageId: 'project-3',
  },
  {
    title: 'Custom ERP Software for a Manufacturing Company',
    client: 'Manufacturing Group',
    tags: ['Software Development', 'ERP'],
    description: 'Built a bespoke ERP system to manage inventory, production, and supply chain, leading to significant efficiency gains.',
    imageId: 'project-1',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const image = PlaceHolderImages.find((img) => img.id === project.imageId);
              return (
                <Card key={project.title} className="flex flex-col overflow-hidden group">
                  {image && (
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>Client: {project.client}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground flex-grow">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
