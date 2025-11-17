import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Camera, 
  Smartphone, 
  Lock, 
  Eye, 
  Wifi, 
  CreditCard, 
  Users,
  MessageSquare,
  UserX,
  Search,
  FileText,
  Zap,
  Globe,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      id: 'photo-watermark',
      icon: <Camera className="w-8 h-8" />,
      title: "Automatic Camera Watermark",
      description: "Integrates with native camera API for real-time watermark overlay on all photos and videos. Works with front/rear cameras and third-party apps.",
      category: "Photo/Video Protection",
      premium: false,
      technical: "iOS: AVFoundation framework, Android: Camera2 API"
    },
    {
      id: 'screenshot-block',
      icon: <Shield className="w-8 h-8" />,
      title: "Screenshot & Screen Recording Blocker",
      description: "Blocks screenshots and screen recordings of sensitive content. Captures photo of person attempting screenshot and alerts content owner.",
      category: "Screen Protection",
      premium: false,
      technical: "iOS: Secure content flag, Android: FLAG_SECURE implementation"
    },
    {
      id: 'anti-stalking',
      icon: <UserX className="w-8 h-8" />,
      title: "Anti-Stalking & AirTag Detection",
      description: "Detects hidden tracking devices (AirTags, Tiles, GPS trackers) following you. Maps location history to detect stalking patterns.",
      category: "Location Safety",
      premium: false,
      technical: "Bluetooth LE scanning, Apple Find My network API, ML pattern recognition"
    },
    {
      id: 'deepfake-detection',
      icon: <Eye className="w-8 h-8" />,
      title: "Deepfake & AI Image Detection",
      description: "Detect if photos/videos of you are AI-generated deepfakes or manipulated. Scans internet and sends takedown notices automatically.",
      category: "AI Protection",
      premium: true,
      technical: "TensorFlow Lite deepfake detection model, Face recognition API"
    },
    {
      id: 'privacy-scanner',
      icon: <Search className="w-8 h-8" />,
      title: "Social Media Privacy Scanner",
      description: "Scans all your social media accounts for privacy risks and exposed personal data. Suggests optimal privacy configurations.",
      category: "Digital Footprint",
      premium: false,
      technical: "OAuth integration, EXIF data parser, Privacy policy analyzer"
    },
    {
      id: 'identity-protection',
      icon: <FileText className="w-8 h-8" />,
      title: "Identity Theft Protection",
      description: "Monitors dark web, credit reports, and public records for identity theft. Provides identity restoration service.",
      category: "Identity Security",
      premium: true,
      technical: "Dark web monitoring API, Credit bureau integration, SSN verification"
    },
    {
      id: 'encrypted-communication',
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Encrypted Secure Communication",
      description: "End-to-end encrypted messaging that self-destructs and can't be screenshotted. Signal Protocol encryption with perfect forward secrecy.",
      category: "Communication",
      premium: false,
      technical: "Signal Protocol library, WebRTC for voice/video, Secure Enclave storage"
    },
    {
      id: 'parental-controls',
      icon: <Users className="w-8 h-8" />,
      title: "Advanced Parental Controls",
      description: "Monitor kids' devices with cyberbullying detection. Tamper alerts sent to parents if app is disabled or removed.",
      category: "Family Protection",
      premium: true,
      technical: "MDM (Mobile Device Management), NLP for cyberbullying detection"
    },
    {
      id: 'intruder-selfie',
      icon: <Camera className="w-8 h-8" />,
      title: "Intruder Selfie Capture",
      description: "Takes photo of anyone entering wrong PIN/password. Silent front camera trigger with email alerts and location logging.",
      category: "Device Security",
      premium: false,
      technical: "Background camera access, Device Admin permissions"
    },
    {
      id: 'app-locks',
      icon: <Lock className="w-8 h-8" />,
      title: "App-Specific Lock",
      description: "Require PIN/biometric for specific apps even when phone unlocked. Works with any app using overlay technology.",
      category: "App Security",
      premium: false,
      technical: "iOS: Screen Time API, Android: Accessibility Service"
    },
    {
      id: 'theft-recovery',
      icon: <Smartphone className="w-8 h-8" />,
      title: "Advanced Device Theft Recovery",
      description: "Track stolen device, take thief photos, record audio, and remotely wipe data. Cannot be factory reset without password.",
      category: "Device Security",
      premium: false,
      technical: "Persistent location services, Anti-factory-reset protection"
    },
    {
      id: 'nfc-detection',
      icon: <CreditCard className="w-8 h-8" />,
      title: "NFC/RFID Scan Detection",
      description: "Detects when someone tries to scan your credit cards/ID. Continuous NFC field monitoring with instant vibration alerts.",
      category: "Wallet Protection",
      premium: true,
      technical: "iOS: Core NFC (limited), Android: NFC API background monitoring"
    },
    {
      id: 'file-encryption',
      icon: <FileText className="w-8 h-8" />,
      title: "Military-Grade File Encryption",
      description: "AES-256 encryption for all sensitive files on device. Encrypted vault storage with biometric unlock and secure file deletion.",
      category: "Data Protection",
      premium: false,
      technical: "iOS: CryptoKit + Secure Enclave, Android: AndroidKeyStore"
    },
    {
      id: 'wifi-scanner',
      icon: <Wifi className="w-8 h-8" />,
      title: "Public WiFi Security Scanner",
      description: "Detects fake WiFi hotspots, man-in-the-middle attacks, and unsecured networks. Auto-enables VPN on risky networks.",
      category: "Network Security",
      premium: false,
      technical: "Network analysis tools, Certificate validation, VPN SDK integration"
    },
    {
      id: 'forward-protection',
      icon: <Shield className="w-8 h-8" />,
      title: "Forward & Reshare Protection",
      description: "Prevents unauthorized forwarding and resharing of your photos and videos across all platforms and messaging apps.",
      category: "Photo/Video Protection",
      premium: false,
      technical: "Digital watermarking, Content tracking, Platform API integration"
    },
    {
      id: 'threat-detection',
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Threat Detection",
      description: "AI-powered real-time monitoring of all device activities, network connections, and potential security threats.",
      category: "Threat Detection",
      premium: true,
      technical: "Machine learning algorithms, Behavioral analysis, Cloud threat intelligence"
    }
  ];

  const categories = [...new Set(features.map(f => f.category))];

  const handleFeatureClick = (feature: any) => {
    if (feature.premium) {
      alert(`🔒 ${feature.title} is a premium feature. Upgrade your plan to access it!`);
    } else {
      alert(`✅ ${feature.title} activated! You can now configure this protection in your dashboard.`);
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/assets/cogo-shield-logo.png" 
                alt="COGO Shield Logo" 
                className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg"
              />
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Complete Protection Suite
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              16+ Advanced security features designed to protect every aspect of your digital life. 
              From photo protection to identity theft prevention.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-orange-300 text-orange-700">
                  {category}
                </Badge>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-orange-800 font-medium">
                🔥 3-Day Free Trial • Basic Features Included • Premium Features Available
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 group h-full">
                {feature.premium && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white z-10">
                    Premium
                  </Badge>
                )}
                
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="text-orange-600 group-hover:text-orange-700 transition-colors flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs mb-3">
                        {feature.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-xs font-medium text-gray-700 mb-1">Technical Implementation:</div>
                    <div className="text-xs text-gray-600">{feature.technical}</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
                      onClick={() => handleFeatureClick(feature)}
                    >
                      {feature.premium ? 'Upgrade to Access' : 'Activate Now'}
                    </Button>
                    <Link to={`/feature/${feature.id}`}>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Complete Protection?</h3>
            <p className="text-xl text-yellow-100 mb-6 max-w-2xl mx-auto">
              Start with our 3-day free trial. Basic protection features included. 
              Upgrade anytime for premium features like NFC detection and AI protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-3">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="!bg-transparent !hover:bg-transparent border-white text-white hover:border-yellow-200 hover:text-yellow-200 font-bold px-8 py-3">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
            
            <div className="mt-6 text-sm text-yellow-100">
              No credit card required • Cancel anytime • 30-day money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}