
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import Image from 'next/image';

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image src="/logo.jpg" alt="Nano Computing ICT Solutions" width={40} height={40} className="rounded-md" />
      <span className={cn(
        "text-xl font-bold font-headline transition-colors",
        isScrolled ? 'text-primary-foreground' : 'text-white'
        )}>Nano Computing ICT Solutions</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo isScrolled={isScrolled} />
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : (isScrolled ? 'text-muted-foreground' : 'text-gray-300 hover:text-white')
              )}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className={cn(isScrolled ? '' : 'bg-transparent text-white hover:bg-white/10 hover:text-white border-gray-400')}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Logo isScrolled={true} />
                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                      )}
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
