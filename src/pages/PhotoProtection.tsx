import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Camera, 
  Shield, 
  Eye, 
  Share, 
  Settings,
  CheckCircle,
  AlertTriangle,
  Image,
  Video,
  Smartphone
} from 'lucide-react';

export default function PhotoProtection() {
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Photo & Video Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced protection for your photos and videos with automatic watermarking, 
              screenshot blocking, and forward protection.
            </p>
          </div>

          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Camera className="w-5 h-5 text-green-600" />
                  Camera Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Status</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="text-2xl font-bold text-green-600">127</div>
                <div className="text-sm text-gray-500">Photos Protected Today</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="w-5 h-5 text-orange-600" />
                  Screenshot Blocking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Status</span>
                  <Badge className="bg-orange-100 text-orange-800">Active</Badge>
                </div>
                <div className="text-2xl font-bold text-orange-600">23</div>
                <div className="text-sm text-gray-500">Attempts Blocked Today</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Share className="w-5 h-5 text-blue-600" />
                  Forward Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Status</span>
                  <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                </div>
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-500">Unauthorized Shares Prevented</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Settings */}
          <Tabs defaultValue="watermark" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="watermark">Watermark</TabsTrigger>
              <TabsTrigger value="screenshot">Screenshot Block</TabsTrigger>
              <TabsTrigger value="forward">Forward Protection</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="watermark" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Automatic Camera Watermark
                  </CardTitle>
                  <CardDescription>
                    Add automatic watermarks to all photos and videos taken with your device camera
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Enable Watermark</Label>
                      <p className="text-sm text-gray-500">Automatically add watermark to all new photos</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-medium">Watermark Text</Label>
                    <Input placeholder="Enter custom watermark text" defaultValue="COGO PROTECTED" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-medium">Watermark Opacity</Label>
                    <Slider defaultValue={[30]} max={100} step={1} className="w-full" />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtle</span>
                      <span>Prominent</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-base font-medium">Position</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {['Top Left', 'Top Center', 'Top Right', 'Center Left', 'Center', 'Center Right', 'Bottom Left', 'Bottom Center', 'Bottom Right'].map((pos, index) => (
                          <Button key={index} variant="outline" size="sm" className={index === 8 ? 'bg-orange-50 border-orange-300' : ''}>
                            {pos.split(' ')[1] || pos}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-base font-medium">Style</Label>
                      <div className="space-y-2 mt-2">
                        <Button variant="outline" size="sm" className="w-full bg-orange-50 border-orange-300">Text Only</Button>
                        <Button variant="outline" size="sm" className="w-full">Logo + Text</Button>
                        <Button variant="outline" size="sm" className="w-full">QR Code</Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-orange-800">Watermark Preview</div>
                        <div className="text-sm text-orange-700 mt-1">
                          Your watermark will appear on all new photos and videos. Existing media is not affected.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="screenshot" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Screenshot & Screen Recording Blocker
                  </CardTitle>
                  <CardDescription>
                    Prevent unauthorized screenshots and screen recordings of your sensitive content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Block Screenshots</Label>
                      <p className="text-sm text-gray-500">Prevent screenshots in protected apps</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Block Screen Recording</Label>
                      <p className="text-sm text-gray-500">Prevent screen recording of sensitive content</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Intruder Detection</Label>
                      <p className="text-sm text-gray-500">Take photo of person attempting screenshot</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-medium">Protected Apps</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Photos', 'Messages', 'Banking', 'Email', 'Notes', 'Documents', 'Social Media', 'All Apps'].map((app, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm font-medium">{app}</span>
                          <Switch defaultChecked={index < 6} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-yellow-800">Important Note</div>
                        <div className="text-sm text-yellow-700 mt-1">
                          Screenshot blocking may not work on rooted/jailbroken devices. Some apps may require additional permissions.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forward" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share className="w-5 h-5" />
                    Forward & Reshare Protection
                  </CardTitle>
                  <CardDescription>
                    Prevent unauthorized forwarding and resharing of your photos and videos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Block Unauthorized Forwarding</Label>
                      <p className="text-sm text-gray-500">Prevent sharing without permission</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Watermark Shared Content</Label>
                      <p className="text-sm text-gray-500">Add watermark when content is shared</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Friend List Only</Label>
                      <p className="text-sm text-gray-500">Only allow sharing with approved contacts</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-medium">Approved Contacts</Label>
                    <div className="space-y-2">
                      {['John Doe', 'Sarah Smith', 'Mike Johnson', '+ Add Contact'].map((contact, index) => (
                        <div key={index} className={`flex items-center justify-between p-3 border rounded-lg ${index === 3 ? 'border-dashed border-orange-300 text-orange-600' : ''}`}>
                          <span className="text-sm font-medium">{contact}</span>
                          {index < 3 && <Button variant="outline" size="sm">Remove</Button>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-800">Protection Active</div>
                        <div className="text-sm text-blue-700 mt-1">
                          Your photos and videos are protected from unauthorized sharing across all platforms.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Advanced Protection Settings
                  </CardTitle>
                  <CardDescription>
                    Configure advanced photo and video protection features
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Third-Party App Protection</Label>
                      <p className="text-sm text-gray-500">Extend protection to camera apps</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Cloud Backup Protection</Label>
                      <p className="text-sm text-gray-500">Protect photos in cloud storage</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Metadata Removal</Label>
                      <p className="text-sm text-gray-500">Remove location and device info</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-medium">Protection Level</Label>
                    <Slider defaultValue={[75]} max={100} step={25} className="w-full" />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Basic</span>
                      <span>Standard</span>
                      <span>High</span>
                      <span>Maximum</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-800">Protected</span>
                      </div>
                      <div className="text-sm text-green-700">
                        • Camera watermarking active<br/>
                        • Screenshot blocking enabled<br/>
                        • Forward protection on
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Settings className="w-4 h-4 text-orange-600" />
                        <span className="font-medium text-orange-800">Settings</span>
                      </div>
                      <div className="text-sm text-orange-700">
                        • Battery optimization: Enabled<br/>
                        • Background processing: Active<br/>
                        • Real-time monitoring: On
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}