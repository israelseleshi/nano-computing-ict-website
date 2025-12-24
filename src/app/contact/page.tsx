'use client';

import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './_components/contact-form';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
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
            <a
              href="tel:+251923787878"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary"
            >
              <Phone className="w-6 h-6 text-primary" />
              <span>+251 923 78 78 78</span>
            </a>
            <a
              href="mailto:info@nanocomputingict.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary"
            >
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
          <Card className="mt-8">
            <CardContent className="p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.638991081893!2d38.7678803!3d9.005326899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b0052a4f3d%3A0x10401dbee19b1be2!2snano%20computing%20ICT%20solution%20CCTV%20Security%20camera%20installation%20In%20Ethiopia%20%2F%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1766583986670!5m2!1sen!2set"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-background p-8 md:p-12 lg:p-16 flex items-center">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-primary font-headline">
            Send us a message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
