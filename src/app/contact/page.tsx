'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './_components/contact-form';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          <div className="space-y-8">
            <div className="p-8 bg-secondary rounded-lg">
                <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl font-headline">
                  Connect With Us
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Ready to transform your business? Let&apos;s discuss your project.
                </p>
                <div className="mt-8 space-y-6 text-lg">
                  <a
                    href="tel:+251923787878"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <span>+251 923 78 78 78</span>
                  </a>
                  <a
                    href="mailto:info@nanocomputingict.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
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

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.638991081893!2d38.7678803!3d9.005326899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b0052a4f3d%3A0x10401dbee19b1be2!2snano%20computing%20ICT%20solution%20CCTV%20Security%20camera%20installation%20In%20Ethiopia%20%2F%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1766583986670!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center">
            <div className="w-full max-w-md mx-auto md:mx-0">
              <h2 className="text-2xl font-bold text-primary font-headline">
                