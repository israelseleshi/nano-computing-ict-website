import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from './_components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Nano Computing ICT Solutions. We are here to answer your questions and help you with your ICT needs.',
};

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find((img) => img.id === 'contact-us');

  return (
    <div className="min-h-[calc(100vh-4rem)] md:grid md:grid-cols-2">
      <div className="bg-secondary p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-5xl font-headline">
            Connect With Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to transform your business? Let&apos;s discuss your project.
          </p>
          <div className="mt-8 space-y-4 text-lg">
            <a href="tel:+251923787878" className="flex items-center gap-4 text-muted-foreground hover:text-primary">
              <Phone className="w-6 h-6 text-primary" />
              <span>+251 923 78 78 78</span>
            </a>
            <a href="mailto:info@nanocomputingict.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary">
              <Mail className="w-6 h-6 text-primary" />
              <span>info@nanocomputingict.com</span>
            </a>
            <div className="flex items-start gap-4 text-muted-foreground">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <span>
                Rayuma Building 2nd Floor (214)
                <br />
                Beside Getu Commercial, Addis Ababa
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background p-8 md:p-12 lg:p-16 flex items-center">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-primary font-headline">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
