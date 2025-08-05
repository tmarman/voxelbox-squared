import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Code2, Square, Globe, BarChart3, Users, Smartphone, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TemplatesPage() {
  const templates = [
    {
      name: "SaaS Startup",
      description: "Perfect for software companies building subscription products",
      timeToLaunch: "2 weeks",
      voxels: [
        { name: "Legal", icon: Building2, color: "from-voxel-blue-500 to-voxel-blue-700" },
        { name: "Dev", icon: Code2, color: "from-voxel-cyan to-cyan-400" },
        { name: "Payment", icon: Square, color: "from-voxel-emerald to-emerald-600" },
        { name: "Analytics", icon: BarChart3, color: "from-purple-500 to-purple-700" }
      ],
      features: ["C-Corp incorporation", "Subscription billing", "User authentication", "Analytics dashboard"],
      pricing: "Most popular"
    },
    {
      name: "E-commerce Store", 
      description: "Everything needed to sell products online",
      timeToLaunch: "1 week",
      voxels: [
        { name: "Legal", icon: Building2, color: "from-voxel-blue-500 to-voxel-blue-700" },
        { name: "Payment", icon: Square, color: "from-voxel-emerald to-emerald-600" },
        { name: "Marketing", icon: Globe, color: "from-voxel-orange to-orange-600" }
      ],
      features: ["LLC formation", "Square POS integration", "Inventory management", "Website with SEO"],
      pricing: "Best for retail"
    },
    {
      name: "Service Business",
      description: "For consultants, agencies, and professional services",
      timeToLaunch: "3 days",
      voxels: [
        { name: "Legal", icon: Building2, color: "from-voxel-blue-500 to-voxel-blue-700" },
        { name: "Payment", icon: Square, color: "from-voxel-emerald to-emerald-600" },
        { name: "Team", icon: Users, color: "from-indigo-500 to-indigo-700" }
      ],
      features: ["LLC formation", "Invoice automation", "Client management", "Team collaboration"],
      pricing: "Quick start"
    },
    {
      name: "Tech Startup",
      description: "For ambitious founders building the next big thing",
      timeToLaunch: "3 weeks", 
      voxels: [
        { name: "Legal", icon: Building2, color: "from-voxel-blue-500 to-voxel-blue-700" },
        { name: "Dev", icon: Code2, color: "from-voxel-cyan to-cyan-400" },
        { name: "Payment", icon: Square, color: "from-voxel-emerald to-emerald-600" },
        { name: "Analytics", icon: BarChart3, color: "from-purple-500 to-purple-700" },
        { name: "Team", icon: Users, color: "from-indigo-500 to-indigo-700" }
      ],
      features: ["Delaware C-Corp", "Custom app development", "Fundraising setup", "Team management", "Growth analytics"],
      pricing: "Enterprise"
    },
    {
      name: "Local Business",
      description: "Perfect for restaurants, shops, and local services",
      timeToLaunch: "5 days",
      voxels: [
        { name: "Legal", icon: Building2, color: "from-voxel-blue-500 to-voxel-blue-700" },
        { name: "Payment", icon: Square, color: "from-voxel-emerald to-emerald-600" },
        { name: "Marketing", icon: Globe, color: "from-voxel-orange to-orange-600" }
      ],
      features: ["LLC formation", "Square POS", "Local SEO", "Online ordering"],
      pricing: "Small business"
    },
    {
      name: "Mobile App Startup",
      description: "For consumer mobile applications and games",
      timeToLaunch: "4 weeks",
      voxels: [
        { name: "Legal", icon: Building2, color: "from-voxel-blue-500 to-voxel-blue-700" },
        { name: "Dev", icon: Smartphone, color: "from-pink-500 to-pink-700" },
        { name: "Payment", icon: Square, color: "from-voxel-emerald to-emerald-600" },
        { name: "Marketing", icon: Globe, color: "from-voxel-orange to-orange-600" },
        { name: "Analytics", icon: BarChart3, color: "from-purple-500 to-purple-700" }
      ],
      features: ["C-Corp incorporation", "Native app development", "In-app purchases", "User acquisition", "App analytics"],
      pricing: "Mobile focused"
    }
  ]

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
            <Link href="/templates" className="text-primary font-semibold">
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
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Business <span className="text-primary">templates</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Pre-configured voxel combinations for different business types. 
              Pick your template and launch faster.
            </p>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {templates.map((template, index) => (
              <div key={template.name} className="bg-card border border-border rounded-lg p-6 space-y-6 hover:border-primary/50 transition-colors relative">
                {/* Pricing Badge */}
                {template.pricing && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {template.pricing}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{template.name}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {template.timeToLaunch}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{template.description}</p>
                </div>

                {/* Voxel Stack Visualization */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Included Voxels:</h4>
                  <div className="flex flex-wrap gap-2">
                    {template.voxels.map((voxel, voxelIndex) => {
                      const IconComponent = voxel.icon
                      return (
                        <div key={voxel.name} className="flex items-center space-x-2 bg-muted/50 rounded-md px-3 py-2">
                          <div className={`w-6 h-6 bg-gradient-to-br ${voxel.color} rounded-sm shadow-md flex items-center justify-center border border-white/20`}>
                            <IconComponent className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-medium text-foreground">{voxel.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">What you get:</h4>
                  <ul className="space-y-2 text-sm">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button className="w-full" asChild>
                  <Link href={`/register?template=${template.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Custom Template CTA */}
          <div className="text-center mt-16 p-8 bg-card border border-border rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need something custom?</h2>
            <p className="text-muted-foreground mb-6">
              Our AI can create a custom voxel combination for your specific business needs. 
              Just describe what you're building.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/custom">
                <Zap className="mr-2 h-4 w-4" />
                Build Custom Template
              </Link>
            </Button>
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