import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { 
  Shield, 
  Camera, 
  Smartphone, 
  Lock, 
  Eye, 
  Wifi, 
  CreditCard, 
  Users,
  AlertTriangle,
  CheckCircle,
  Activity,
  Settings
} from 'lucide-react';

export default function Dashboard() {
  const securityStatus = [
    { name: "Photo Protection", status: "active", level: 95 },
    { name: "Device Security", status: "active", level: 88 },
    { name: "Identity Monitoring", status: "active", level: 92 },
    { name: "Network Security", status: "warning", level: 65 },
    { name: "Privacy Scanner", status: "active", level: 90 }
  ];

  const recentAlerts = [
    { type: "warning", message: "Suspicious WiFi network detected", time: "2 min ago" },
    { type: "info", message: "Photo watermark applied successfully", time: "15 min ago" },
    { type: "success", message: "Identity scan completed - no threats", time: "1 hour ago" },
    { type: "warning", message: "Screenshot attempt blocked", time: "3 hours ago" }
  ];

  const quickActions = [
    { icon: <Camera className="w-5 h-5" />, title: "Photo Settings", desc: "Watermark & protection" },
    { icon: <Shield className="w-5 h-5" />, title: "Scan Devices", desc: "Check for trackers" },
    { icon: <Lock className="w-5 h-5" />, title: "App Locks", desc: "Secure specific apps" },
    { icon: <Eye className="w-5 h-5" />, title: "Privacy Scan", desc: "Check social media" }
  ];

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
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <img 
                src="/assets/cogo-shield-logo.png" 
                alt="COGO Shield" 
                className="w-16 h-16 drop-shadow-md"
              />
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  COGO Dashboard
                </h1>
                <p className="text-gray-600 mt-2">Your complete security overview</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>

          {/* Security Status Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Security Status
                </CardTitle>
                <CardDescription>Real-time protection levels across all features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {securityStatus.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">{item.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{item.level}%</span>
                          {item.status === 'active' ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                          )}
                        </div>
                      </div>
                      <Progress 
                        value={item.level} 
                        className="h-2"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-600" />
                  Protection Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">94%</div>
                  <div className="text-sm text-gray-600">Overall Protection</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-semibold text-orange-600">127</div>
                    <div className="text-xs text-gray-600">Threats Blocked</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-blue-600">23</div>
                    <div className="text-xs text-gray-600">Photos Protected</div>
                  </div>
                </div>
                <Badge className="w-full justify-center bg-green-100 text-green-800 hover:bg-green-100">
                  All Systems Active
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Recent Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Fast access to key security features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="h-auto p-4 flex flex-col items-center gap-2 hover:border-orange-300 hover:bg-orange-50"
                    >
                      <div className="text-orange-600">{action.icon}</div>
                      <div className="text-center">
                        <div className="font-medium text-sm">{action.title}</div>
                        <div className="text-xs text-gray-500">{action.desc}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest security events and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === 'warning' ? 'bg-yellow-500' :
                        alert.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">{alert.message}</div>
                        <div className="text-xs text-gray-500">{alert.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Toggles */}
          <Card>
            <CardHeader>
              <CardTitle>Protection Features</CardTitle>
              <CardDescription>Enable or disable specific security features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Camera className="w-5 h-5" />, title: "Photo Watermark", enabled: true },
                  { icon: <Shield className="w-5 h-5" />, title: "Screenshot Block", enabled: true },
                  { icon: <CreditCard className="w-5 h-5" />, title: "NFC Detection", enabled: false, premium: true },
                  { icon: <Wifi className="w-5 h-5" />, title: "WiFi Scanner", enabled: true },
                  { icon: <Lock className="w-5 h-5" />, title: "App Locks", enabled: true },
                  { icon: <Eye className="w-5 h-5" />, title: "Deepfake Detection", enabled: false, premium: true },
                  { icon: <Users className="w-5 h-5" />, title: "Parental Controls", enabled: false, premium: true },
                  { icon: <Smartphone className="w-5 h-5" />, title: "Theft Recovery", enabled: true }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-orange-600">{feature.icon}</div>
                      <div>
                        <div className="font-medium text-sm">{feature.title}</div>
                        {feature.premium && (
                          <Badge variant="secondary" className="text-xs mt-1">Premium</Badge>
                        )}
                      </div>
                    </div>
                    <Switch checked={feature.enabled} disabled={feature.premium && !feature.enabled} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}