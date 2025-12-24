import Link from 'next/link';
import { Mountain, Facebook, Twitter, Linkedin } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Mountain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline">Nano Computing ICT Solutions</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Your partner in digital transformation.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Contact Us</h3>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>Dhaka, Bangladesh</p>
                <p>Email: info@nanocomputingict.com</p>
                <p>Phone: +880 123 456 7890</p>
              </div>
            </div>
        </div>
      </div>
      <div className="bg-muted text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} Nano Computing ICT Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
