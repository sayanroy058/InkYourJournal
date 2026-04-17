import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Journal from "./pages/Journal";
import Research from "./pages/Research";
import EditorialBoard from "./pages/EditorialBoard";
import Contact from "./pages/Contact";
import SubmitPaper from "./pages/SubmitPaper";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/research" element={<Research />} />
          <Route path="/editorial-board" element={<EditorialBoard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit" element={<SubmitPaper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
