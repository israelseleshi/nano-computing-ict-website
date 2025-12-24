import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-4">
      <h1 className="text-8xl font-extrabold text-primary font-headline tracking-tighter">404</h1>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">Page Not Found</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back home
        </Link>
      </Button>
    </div>
  )
}
