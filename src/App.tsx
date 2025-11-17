import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import PhotoProtection from './pages/PhotoProtection';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import FeatureDetail from './pages/FeatureDetail';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import InstallModal from './pages/InstallModal';

const queryClient = new QueryClient();

const App = () => {


  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <Toaster /> */}
       <InstallModal /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/photo-protection" element={<PhotoProtection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/feature/:featureId" element={<FeatureDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)
};

export default App;