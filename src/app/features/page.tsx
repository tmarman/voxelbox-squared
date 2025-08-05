import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Code2, Square, Smartphone, BarChart3, Users, Zap, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FeaturesPage() {
  const voxels = [
    {
      name: "Legal Voxel",
      icon: Building2,
      description: "Complete business formation in one snap",
      features: ["LLC/C-Corp incorporation", "EIN filing automation", "Operating agreements", "Registered agent service", "State compliance tracking"],
      gradient: "from-voxel-blue-500 to-voxel-blue-700",
      rotation: "rotate-12"
    },
    {
      name: "Dev Voxel", 
      icon: Code2,
      description: "AI-powered development that fits your stack",
      features: ["Natural language to code", "GitHub integration", "Custom app generation", "API development", "Deployment automation"],
      gradient: "from-voxel-cyan to-cyan-400",
      rotation: "-rotate-12"
    },
    {
      name: "Payment Voxel",
      icon: Square,
      description: "Square payments and business tools connected",
      features: ["Payment processing", "Point of sale systems", "Invoicing & billing", "Inventory management", "Financial reporting"],
      gradient: "from-voxel-emerald to-emerald-600", 
      rotation: "rotate-6"
    },
    {
      name: "Marketing Voxel",
      icon: Globe,
      description: "Digital presence that drives growth",
      features: ["Website generation", "SEO optimization", "Email campaigns", "Social media automation", "Analytics tracking"],
      gradient: "from-voxel-orange to-orange-600",
      rotation: "rotate-3"
    },
    {
      name: "Analytics Voxel",
      icon: BarChart3,
      description: "Business intelligence for smart decisions",
      features: ["Revenue forecasting", "Customer insights", "Performance metrics", "Growth analysis", "Custom dashboards"],
      gradient: "from-purple-500 to-purple-700",
      rotation: "-rotate-6"
    },
    {
      name: "Team Voxel",
      icon: Users,
      description: "HR and collaboration tools for scaling",
      features: ["Payroll management", "Team communication", "Project management", "Performance tracking", "Onboarding automation"],
      gradient: "from-indigo-500 to-indigo-700",
      rotation: "rotate-9"
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
            <Link href="/features" className="text-primary font-semibold">
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
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Every <span className="text-primary">voxel</span> you need
            </h1>
            <p className="text-xl text-muted-foreground">
              Pre-built business components that snap together perfectly. 
              Start with the essentials, add more as you grow.
            </p>
          </div>

          {/* Voxel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {voxels.map((voxel) => {
              const IconComponent = voxel.icon
              return (
                <div key={voxel.name} className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors">
                  {/* Voxel Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${voxel.gradient} rounded-md shadow-xl flex items-center justify-center transform ${voxel.rotation} border border-white/20`}>
                    <IconComponent className={`h-8 w-8 text-white transform ${voxel.rotation === 'rotate-12' ? '-rotate-12' : voxel.rotation === '-rotate-12' ? 'rotate-12' : `-${voxel.rotation}`}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{voxel.name}</h3>
                    <p className="text-muted-foreground">{voxel.description}</p>
                    
                    {/* Feature List */}
                    <ul className="space-y-2 text-sm">
                      {voxel.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 space-y-6">
            <h2 className="text-2xl font-bold">Ready to build your box?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with our core voxels and add more as your business grows. 
              Everything connects seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/register">
                  Start Building <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link href="/templates">
                  Browse Templates
                </Link>
              </Button>
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