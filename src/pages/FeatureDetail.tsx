import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function FeatureDetail() {
  const { featureId } = useParams();
  
  // Mock feature data - in real app this would come from API/database
  const featureData = {
    'photo-watermark': {
      title: 'Automatic Camera Watermark',
      description: 'Protect your photos and videos with automatic watermarking that cannot be removed',
      premium: false,
      category: 'Photo/Video Protection',
      howItWorks: [
        'Integrates directly with your device camera API',
        'Adds real-time watermark overlay during photo/video capture',
        'Works with both front and rear cameras',
        'Compatible with third-party camera applications',
        'Watermark cannot be removed after capture',
        'Customizable text, position, and opacity settings'
      ],
      technicalSpecs: {
        ios: 'Uses AVFoundation framework for camera integration',
        android: 'Implements Camera2 API for real-time processing',
        performance: 'Minimal battery impact with optimized rendering',
        compatibility: 'Works on iOS 12+ and Android 8+'
      },
      benefits: [
        'Prevents unauthorized use of your photos',
        'Provides legal proof of ownership',
        'Deters photo theft and misuse',
        'Maintains photo quality while adding protection'
      ]
    },
    'screenshot-block': {
      title: 'Screenshot & Screen Recording Blocker',
      description: 'Block unauthorized screenshots and screen recordings of your sensitive content',
      premium: false,
      category: 'Screen Protection',
      howItWorks: [
        'Monitors system-level screenshot attempts',
        'Blocks native screenshot functionality in protected apps',
        'Detects screen recording software usage',
        'Captures photo of person attempting screenshot',
        'Sends immediate alerts to content owner',
        'Works with banking, messaging, and photo apps'
      ],
      technicalSpecs: {
        ios: 'Uses secure content flags and screenshot observers',
        android: 'Implements FLAG_SECURE and screen capture detection',
        limitations: 'May not work on rooted/jailbroken devices',
        permissions: 'Requires camera and notification permissions'
      },
      benefits: [
        'Protects sensitive information from capture',
        'Identifies potential security threats',
        'Maintains privacy in messaging apps',
        'Prevents unauthorized content sharing'
      ]
    }
  };

  const feature = featureData[featureId as keyof typeof featureData];

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Feature Not Found</h1>
          <Link to="/features">
            <Button>Back to Features</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleGetStarted = () => {
    if (feature.premium) {
      alert('🔒 This is a premium feature. Upgrade your plan to access it!');
    } else {
      alert('✅ Feature activated! You can now configure this protection in your dashboard.');
    }
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/features">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Features
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <img 
                src="/assets/cogo-shield-logo.png" 
                alt="COGO Shield" 
                className="w-12 h-12 drop-shadow-md"
              />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  {feature.title}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    {feature.category}
                  </Badge>
                  {feature.premium && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Feature Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-600" />
                Feature Overview
              </CardTitle>
              <CardDescription className="text-lg">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
              >
                {feature.premium ? 'Upgrade to Access' : 'Activate Feature'}
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feature.howItWorks.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Specifications */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">iOS Implementation</h4>
                  <p className="text-sm text-gray-600">{feature.technicalSpecs.ios}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Android Implementation</h4>
                  <p className="text-sm text-gray-600">{feature.technicalSpecs.android}</p>
                </div>
                {feature.technicalSpecs.performance && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Performance</h4>
                    <p className="text-sm text-gray-600">{feature.technicalSpecs.performance}</p>
                  </div>
                )}
                {feature.technicalSpecs.compatibility && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Compatibility</h4>
                    <p className="text-sm text-gray-600">{feature.technicalSpecs.compatibility}</p>
                  </div>
                )}
              </div>
              
              {feature.technicalSpecs.limitations && (
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-yellow-800">Important Note</div>
                      <div className="text-sm text-yellow-700 mt-1">{feature.technicalSpecs.limitations}</div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-8 text-center">
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to get protected?</h3>
                <p className="text-gray-600 mb-4">
                  {feature.premium 
                    ? 'Upgrade to premium to access this advanced security feature.'
                    : 'This feature is included in your free trial. Activate it now!'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                  >
                    {feature.premium ? 'Upgrade Now' : 'Activate Feature'}
                  </Button>
                  <Link to="/features">
                    <Button variant="outline" className="border-orange-500 text-orange-600 hover:border-orange-600 hover:text-orange-700">
                      Explore More Features
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}