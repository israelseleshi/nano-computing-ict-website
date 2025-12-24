import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest news, insights, and articles from the team at Nano Computing ICT Solutions.',
};

const blogPosts = [
  {
    title: 'The Future of Networking: Wi-Fi 6 and Beyond',
    description: 'Explore how the next generation of wireless technology is set to revolutionize connectivity for businesses and consumers alike.',
    author: 'Ayesha Siddika',
    date: 'October 26, 2023',
    imageId: 'blog-1',
  },
  {
    title: 'A Practical Guide to Cybersecurity for Small Businesses',
    description: 'Small businesses are prime targets for cyberattacks. Learn the essential steps you can take to protect your digital assets.',
    author: 'Ismail Hossain',
    date: 'October 15, 2023',
    imageId: 'blog-2',
  },
  {
    title: 'Migrating to the Cloud: Benefits and Challenges',
    description: 'Is your business ready for the cloud? We break down the advantages of cloud migration and how to navigate the potential hurdles.',
    author: 'Fatima Khan',
    date: 'September 30, 2023',
    imageId: 'blog-3',
  },
  {
    title: 'The Role of AI in Modern Software Development',
    description: 'AI is not just a buzzword. Discover how artificial intelligence is transforming the software development lifecycle.',
    author: 'A. Rahman',
    date: 'September 12, 2023',
    imageId: 'blog-1',
  },
  {
    title: 'Building a Scalable IT Infrastructure',
    description: 'As your business grows, your IT infrastructure needs to keep pace. Here are key considerations for scalability.',
    author: 'Fatima Khan',
    date: 'August 28, 2023',
    imageId: 'blog-2',
  },
  {
    title: 'VoIP vs. Traditional Phone Systems: Which is Right for You?',
    description: 'We compare the pros and cons of IP telephony and traditional landlines to help you make an informed decision.',
    author: 'Ismail Hossain',
    date: 'August 05, 2023',
    imageId: 'blog-3',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="From Our Blog"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const image = PlaceHolderImages.find((img) => img.id === post.imageId);
              return (
                <Card key={post.title} className="flex flex-col overflow-hidden group">
                  {image && (
                    <div className="relative h-56 w-full overflow-hidden">
                      <Link href="#" className="absolute inset-0 z-10">
                        <span className="sr-only">View post</span>
                      </Link>
                      <Image
                        src={image.imageUrl}
                        alt={post.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="leading-tight group-hover:text-primary transition-colors">
                      <Link href="#">{post.title}</Link>
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-10 w-10">
                       <AvatarImage src={`https://i.pravatar.cc/150?u=${post.author}`} />
                       <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-muted-foreground">{post.date}</p>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
