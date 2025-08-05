import { Button } from '@/components/ui/button'
import { Check, ArrowRight, Zap, Building2, Code2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PricingPage() {
  const plans = [
    {
      name: "Starter Box",
      price: "Free",
      description: "Perfect for exploring the voxel concept",
      features: [
        "1 business formation",
        "Basic legal voxel (LLC only)",
        "Community support",
        "Template library access"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-500 to-gray-700"
    },
    {
      name: "Business Box",
      price: "$29",
      period: "/month",
      description: "Everything you need to launch and run your business",
      features: [
        "Unlimited business formations",
        "All voxel types included",
        "Square integration & setup",
        "AI-powered app generation",
        "Priority support",
        "Custom voxel combinations",
        "GitHub integration"
      ],
      cta: "Start Building",
      popular: true,
      gradient: "from-voxel-cyan to-cyan-400"
    },
    {
      name: "Enterprise Box",
      price: "$299",
      period: "/month",
      description: "For teams and growing companies",
      features: [
        "Everything in Business Box",
        "Custom voxel development",
        "Team collaboration tools",
        "Advanced analytics",
        "White-label options",
        "Dedicated success manager",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-voxel-orange to-orange-600"
    }
  ]

  const addOns = [
    {
      name: "Business Formation Service",
      price: "$500-2000",
      description: "Full-service incorporation with legal support",
      icon: Building2
    },
    {
      name: "Custom App Development",
      price: "$5000+",
      description: "Bespoke application development by our team",
      icon: Code2
    },
    {
      name: "Priority Support",
      price: "$199/month",
      description: "24/7 support with dedicated slack channel",
      icon: Zap
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
            <Link href="/pricing" className="text-primary font-semibold">
              Pricing
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
              Simple <span className="text-primary">pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the box that fits your business. Start free, upgrade when you're ready to scale.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative bg-card border rounded-lg p-8 ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/register">
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Add-on Services</h2>
              <p className="text-muted-foreground">
                Need extra help? We offer professional services to accelerate your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon) => {
                const IconComponent = addon.icon
                return (
                  <div key={addon.name} className="bg-card border border-border rounded-lg p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{addon.name}</h3>
                    <p className="text-2xl font-bold text-primary">{addon.price}</p>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I switch plans anytime?</h3>
                <p className="text-muted-foreground">Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">What's included in business formation?</h3>
                <p className="text-muted-foreground">We handle incorporation paperwork, EIN registration, operating agreements, and registered agent services. Everything you need to legally start your business.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">We offer a 30-day money-back guarantee on all plans. If you're not satisfied, we'll refund your payment, no questions asked.</p>
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