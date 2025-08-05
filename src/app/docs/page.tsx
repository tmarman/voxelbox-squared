import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Code2, Zap, HelpCircle, FileText, Video } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Everything you need to build your first business box",
      icon: Zap,
      links: [
        { name: "Quick Start Guide", href: "#", description: "Build your first voxel in 5 minutes" },
        { name: "Choosing Your Template", href: "#", description: "Find the perfect voxel combination" },
        { name: "Business Formation 101", href: "#", description: "LLC vs C-Corp explained simply" },
        { name: "Setting Up Payments", href: "#", description: "Connect Square and start accepting money" }
      ]
    },
    {
      title: "Voxel Guides",
      description: "Deep dives into each business building block",
      icon: BookOpen,
      links: [
        { name: "Legal Voxel", href: "#", description: "Incorporation, EIN, and compliance automation" },
        { name: "Payment Voxel", href: "#", description: "Square integration and financial tools" },
        { name: "Dev Voxel", href: "#", description: "AI-powered app generation and GitHub sync" },
        { name: "Marketing Voxel", href: "#", description: "Websites, SEO, and growth automation" },
        { name: "Analytics Voxel", href: "#", description: "Business intelligence and reporting" },
        { name: "Team Voxel", href: "#", description: "HR, payroll, and collaboration tools" }
      ]
    },
    {
      title: "API & Development",
      description: "For developers integrating with Voxelbox",
      icon: Code2,
      links: [
        { name: "REST API Reference", href: "#", description: "Complete API documentation" },
        { name: "Webhooks", href: "#", description: "Real-time notifications for voxel events" },
        { name: "Custom Voxels", href: "#", description: "Build and share your own voxels" },
        { name: "SDKs & Libraries", href: "#", description: "Official SDKs for popular languages" }
      ]
    },
    {
      title: "Support & Community",
      description: "Get help and connect with other builders",
      icon: HelpCircle,
      links: [
        { name: "FAQ", href: "#", description: "Common questions answered" },
        { name: "Community Forum", href: "#", description: "Connect with other Voxelbox users" },
        { name: "Contact Support", href: "#", description: "Get help from our team" },
        { name: "Feature Requests", href: "#", description: "Suggest new voxels and features" }
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center space-x-2">
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
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link href="/templates" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Templates
            </Link>
            <Link href="/docs" className="text-primary font-semibold">
              Docs
            </Link>
          </nav>
          
          {/* Right: Actions */}
          <div className="flex items-center space-x-2">
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
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn how to build, customize, and scale your business with Voxelbox.
              Everything you need to go from idea to success.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="#getting-started">
                <BookOpen className="mr-2 h-4 w-4" />
                Quick Start Guide
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link href="#api">
                <Code2 className="mr-2 h-4 w-4" />
                API Reference
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link href="#support">
                <Video className="mr-2 h-4 w-4" />
                Video Tutorials
              </Link>
            </Button>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {docSections.map((section) => {
              const IconComponent = section.icon
              return (
                <div key={section.title} className="bg-card border border-border rounded-lg p-6 space-y-6">
                  {/* Section Header */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-3">
                    {section.links.map((link, index) => (
                      <Link 
                        key={index}
                        href={link.href}
                        className="block p-3 rounded-md hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Popular Guides */}
          <div className="mt-16 bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Popular Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-voxel-blue-500 to-voxel-blue-700 rounded-md shadow-lg mx-auto flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Form Your First LLC</h3>
                <p className="text-sm text-muted-foreground">Complete guide to business formation</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-voxel-cyan to-cyan-400 rounded-md shadow-lg mx-auto flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Build Your First App</h3>
                <p className="text-sm text-muted-foreground">AI-powered development walkthrough</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-voxel-emerald to-emerald-600 rounded-md shadow-lg mx-auto flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Accept Payments</h3>
                <p className="text-sm text-muted-foreground">Square integration made simple</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 md:py-0 mt-auto">
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
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/support" className="hover:text-foreground">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}