import Image from 'next/image';
import type { Metadata } from 'next';
import { Users, Target, Rocket, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AboutUsSummary from './_components/about-us-summary';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Nano Computing ICT Solutions, our mission, vision, and the expert team driving our success.',
};

const teamMembers = [
  { name: 'A. Rahman', role: 'CEO & Founder', avatar: '/avatars/01.png' },
  { name: 'Fatima Khan', role: 'Chief Technology Officer', avatar: '/avatars/02.png' },
  { name: 'Ismail Hossain', role: 'Head of Operations', avatar: '/avatars/03.png' },
  { name: 'Ayesha Siddika', role: 'Lead Software Engineer', avatar: '/avatars/04.png' },
];

const values = [
    { icon: <Rocket className="w-8 h-8 text-primary" />, title: "Innovation", description: "We constantly explore new technologies to deliver cutting-edge solutions." },
    { icon: <Users className="w-8 h-8 text-primary" />, title: "Customer First", description: "Our clients are our top priority. We build solutions to meet their unique needs." },
    { icon: <Lightbulb className="w-8 h-8 text-primary" />, title: "Integrity", description: "We operate with transparency and honesty in all our engagements." },
    { icon: <Target className="w-8 h-8 text-primary" />, title: "Excellence", description: "We are committed to the highest standards of quality in everything we do." },
];

export default function AboutPage() {
  const teamImage = PlaceHolderImages.find((img) => img.id === 'about-us-team');

  return (
    <>
      <PageHeader
        title="About Nano Computing ICT Solutions"
        description="We are a team of passionate ICT professionals dedicated to providing the best possible technology solutions to our clients."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-bold text-primary font-headline">Our Story</h2>
              <p>
                Founded in 2012, Nano Computing and ICT Solutions began as a computer and accessories provider. Over the years, we have evolved into a major ICT solution provider in Bangladesh, serving both private and government organizations.
              </p>
              <p>
                Our journey is marked by a relentless pursuit of excellence and a commitment to leveraging technology to solve complex challenges. We believe in building long-term partnerships with our clients, founded on trust, innovation, and mutual success.
              </p>
            </div>
            <div className="relative h-80 w-full lg:h-96">
                {teamImage && <Image src={teamImage.imageUrl} alt={teamImage.description} data-ai-hint={teamImage.imageHint} fill className="rounded-lg object-cover shadow-xl" />}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <AboutUsSummary />
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary font-headline">Our Core Values</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">The principles that guide our work and define our culture.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">{value.icon}</div>
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
            <h2 className="text-3xl font-bold text-primary font-headline">Meet Our Team</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">The experts driving our innovation and your success.</p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center">
                        <Avatar className="w-24 h-24 border-2 border-primary">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${member.name}`} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
                        <p className="text-sm text-primary">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
