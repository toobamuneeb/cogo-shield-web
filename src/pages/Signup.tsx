import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      alert('🎉 Welcome to COGO! Your 3-day free trial has started. Check your email for confirmation.');
    }, 2000);
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
        <div className="max-w-2xl mx-auto">
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
                Start Your Free Trial
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Signup Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  Create Your Account
                </CardTitle>
                <CardDescription>
                  Get 3 days of complete protection - absolutely free
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the Terms of Service and Privacy Policy
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    disabled={!agreed || isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Start 3-Day Free Trial'}
                  </Button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-orange-600 hover:text-orange-700 font-medium">
                    Sign In
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Trial Benefits */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's Included in Your Trial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    'Automatic photo watermarking',
                    'Screenshot & screen recording blocking',
                    'Anti-stalking & AirTag detection',
                    'Device theft recovery',
                    'App-specific locks',
                    'WiFi security scanning',
                    'Military-grade file encryption',
                    'Secure communication'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="text-center">
                    <Badge className="bg-orange-500 text-white mb-2">Premium Features</Badge>
                    <div className="text-sm text-orange-800">
                      <p className="font-medium mb-1">Upgrade anytime for:</p>
                      <p>• NFC/RFID scan detection</p>
                      <p>• Deepfake & AI image detection</p>
                      <p>• Identity theft protection</p>
                      <p>• Advanced parental controls</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-gray-600">
                <p>✅ No credit card required</p>
                <p>✅ Cancel anytime</p>
                <p>✅ 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}