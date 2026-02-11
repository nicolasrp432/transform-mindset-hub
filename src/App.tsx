import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Testimonials from "./pages/Testimonials";
import Gift from "./pages/Gift";
import Contact from "./pages/Contact";
import Comenzar from "./pages/Comenzar";
import NotFound from "./pages/NotFound";
import { ROUTES } from '@/lib/routes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.about.slice(1)} element={<AboutMe />} />
            <Route path={ROUTES.services.slice(1)} element={<Services />} />
            <Route path={ROUTES.process.slice(1)} element={<Process />} />
            <Route path={ROUTES.testimonials.slice(1)} element={<Testimonials />} />
            <Route path={ROUTES.gift.slice(1)} element={<Gift />} />
            <Route path={ROUTES.contact.slice(1)} element={<Contact />} />
            <Route path={ROUTES.start.slice(1)} element={<Comenzar />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;