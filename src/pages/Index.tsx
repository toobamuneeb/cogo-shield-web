import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Camera, Smartphone, Lock, Eye, Wifi, CreditCard, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import InstallModal from './InstallModal';

export default function Index() {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo/Video Protection",
      description: "Automatic watermarks, screenshot blocking, and forward protection",
      premium: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Anti-Stalking Detection",
      description: "Detect AirTags, GPS trackers, and suspicious following patterns",
      premium: false
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "NFC/RFID Protection",
      description: "Detect unauthorized scanning of credit cards and IDs",
      premium: true
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Deepfake Detection",
      description: "AI-powered detection of manipulated images and videos",
      premium: true
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption for files and communications",
      premium: false
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Device Theft Recovery",
      description: "Track, photograph thieves, and remotely wipe data",
      premium: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Parental Controls",
      description: "Advanced monitoring with tamper detection alerts",
      premium: true
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "WiFi Security Scanner",
      description: "Detect fake hotspots and man-in-the-middle attacks",
      premium: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      
      {/* Lava Border Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-80 blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 opacity-80 blur-sm"></div>
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 opacity-80 blur-sm"></div>
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 opacity-80 blur-sm"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            {/* COGO Shield Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src="/assets/cogo-shield-logo.png" 
                alt="COGO Shield Logo" 
                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              COGO
            </h1>
            <p className="text-2xl text-gray-700 mb-2">Complete Privacy & Security Protection</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced protection against unauthorized photography, stalking, identity theft, and digital threats. 
              Military-grade security for your digital life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-3 text-lg"
              >
                Start 3-Day Free Trial
              </Button>
            </Link>
            <Link to="/features">
              <Button 
                variant="outline" 
                size="lg"
                className="!bg-transparent !hover:bg-transparent border-orange-500 text-orange-600 hover:border-orange-600 hover:text-orange-700 font-semibold px-8 py-3 text-lg"
              >
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Trial Info */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-lg p-4 max-w-2xl mx-auto mb-16">
            <p className="text-orange-800 font-medium">
              🔥 3-Day Free Trial • Photo/Video Protection Included • NFC/RFID Protection: Premium Add-on
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Complete Digital Protection Suite
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            16+ Advanced security features to protect your privacy, identity, and digital assets from all threats.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 group">
                {feature.premium && (
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                    Premium
                  </Badge>
                )}
                <CardHeader className="pb-3">
                  <div className="text-orange-600 mb-2 group-hover:text-orange-700 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button 
                size="lg"
                variant="outline"
                className="!bg-transparent !hover:bg-transparent border-2 border-orange-500 text-orange-600 hover:border-orange-600 hover:text-orange-700 font-semibold px-8 py-3"
              >
                View All 16+ Features →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Protect Your Digital Life?
          </h3>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join thousands who trust COGO for complete privacy and security protection. 
            Start your free trial today - no commitment required.
          </p>
          <Link to="/signup">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-3 text-lg"
            >
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}