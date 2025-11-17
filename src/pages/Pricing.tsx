import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "3 days",
      description: "Try all basic features risk-free",
      features: [
        "Photo/Video watermarking",
        "Screenshot blocking",
        "Anti-stalking detection",
        "Device theft recovery",
        "App-specific locks",
        "WiFi security scanner",
        "File encryption",
        "Secure communication"
      ],
      cta: "Start Free Trial",
      popular: false,
      ctaLink: "/signup"
    },
    {
      name: "Basic Protection",
      price: "$9.99",
      period: "per month",
      description: "Essential privacy and security features",
      features: [
        "All Free Trial features",
        "Priority support",
        "Advanced settings",
        "Cloud backup protection",
        "Extended device recovery",
        "Custom watermarks",
        "Bulk photo protection",
        "Family sharing (up to 3 devices)"
      ],
      cta: "Choose Basic",
      popular: true,
      ctaLink: "/signup"
    },
    {
      name: "Premium Shield",
      price: "$19.99",
      period: "per month",
      description: "Complete protection with premium features",
      features: [
        "All Basic features",
        "NFC/RFID scan detection",
        "Deepfake & AI detection",
        "Identity theft protection",
        "Advanced parental controls",
        "Dark web monitoring",
        "Real-time threat detection",
        "Unlimited devices",
        "24/7 premium support"
      ],
      cta: "Choose Premium",
      popular: false,
      ctaLink: "/signup"
    }
  ];

  const handlePlanSelect = (planName: string) => {
    alert(`🛡️ You selected ${planName}! Redirecting to secure checkout...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Lava Border Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-70 blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 opacity-70 blur-sm"></div>
        <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 opacity-70 blur-sm"></div>
        <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 opacity-70 blur-sm"></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <img 
                src="/assets/cogo-shield-logo.png" 
                alt="COGO Shield" 
                className="w-12 h-12 drop-shadow-md"
              />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Choose Your Protection Plan
              </h1>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect level of protection for your digital life. 
              All plans include our core security features with different levels of advanced protection.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-2 border-orange-400 shadow-xl' : 'border-2 hover:border-orange-200'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={plan.popular ? 'pt-12' : ''}>
                  <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 ${plan.popular 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                    }`}
                    onClick={() => handlePlanSelect(plan.name)}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Can I cancel anytime?</h4>
                  <p className="text-sm text-gray-600">Yes, you can cancel your subscription at any time. No questions asked, no cancellation fees.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What happens after the free trial?</h4>
                  <p className="text-sm text-gray-600">You can choose to upgrade to a paid plan or continue with limited free features. No automatic charges.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Do you offer refunds?</h4>
                  <p className="text-sm text-gray-600">Yes, we offer a 30-day money-back guarantee on all paid plans. Full refund, no questions asked.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">How many devices can I protect?</h4>
                  <p className="text-sm text-gray-600">Basic plan covers 3 devices, Premium plan offers unlimited device protection for your family.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">Our security experts are here to help you choose the right protection plan.</p>
              <Button variant="outline" className="border-orange-500 text-orange-600 hover:border-orange-600 hover:text-orange-700">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}