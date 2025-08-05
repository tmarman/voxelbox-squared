import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Building2, Code2, Square } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container grid grid-cols-3 h-14 items-center">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center space-x-2 justify-self-start">
            <Image 
              src="/images/voxelbox-blue.svg" 
              alt="Voxelbox Logo" 
              width={32} 
              height={24}
              className="h-6 w-auto"
            />
            <span className="font-bold text-lg">Voxelbox</span>
          </Link>
          
          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium justify-self-center">
            <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link href="/templates" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Templates
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Pricing
            </Link>
          </nav>
          
          {/* Right: Actions */}
          <div className="flex items-center space-x-2 justify-self-end">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1">
        <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center space-y-8">
          <div className="space-y-6 max-w-3xl">
            {/* Hero Logo */}
            <div className="flex justify-center mb-8">
              <Image 
                src="/images/voxelbox-blue.svg" 
                alt="Voxelbox" 
                width={200} 
                height={120}
                className="h-24 w-auto sm:h-32 sm:w-auto"
                priority
              />
            </div>
            
            {/* Main Tagline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Business building blocks{' '}
              <span className="text-primary">right out of the box</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Snap together pre-built voxels for incorporation, payments, apps, and more. 
              Your complete business platform assembled in minutes, not months.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/register">
                Build Your Box <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link href="/templates">
                Explore Voxels
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image 
              src="/images/voxelbox-blue.svg" 
              alt="Voxelbox Logo" 
              width={24} 
              height={18}
              className="h-5 w-auto"
            />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by the Voxelbox team. Everything you need, right out of the box.
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground">Docs</Link>
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/support" className="hover:text-foreground">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}