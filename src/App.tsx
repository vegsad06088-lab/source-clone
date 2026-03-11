import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import Layout from "@/components/Layout";
import HomePage from "@/pages/Index";
import ApartmentsPage from "@/pages/ApartmentsPage";
import ApartmentDetailPage from "@/pages/ApartmentDetailPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import AnleitungenPage from "@/pages/AnleitungenPage";
import AnleitungDetailPage from "@/pages/AnleitungDetailPage";
import DatenschutzPage from "@/pages/DatenschutzPage";
import ImpressumPage from "@/pages/ImpressumPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <I18nProvider>
          <Routes>
            <Route element={<Layout />}>
              {/* German routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/apartments" element={<ApartmentsPage />} />
              <Route path="/twin-harmony-suite" element={<ApartmentDetailPage />} />
              <Route path="/duo-deluxe-studio" element={<ApartmentDetailPage />} />
              <Route path="/cosy-couple-nest" element={<ApartmentDetailPage />} />
              <Route path="/trio-harmony-suite" element={<ApartmentDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/anleitungen" element={<AnleitungenPage />} />
              <Route path="/anleitungen-post/:slug" element={<AnleitungDetailPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />

              {/* English routes */}
              <Route path="/en" element={<HomePage />} />
              <Route path="/en/apartments" element={<ApartmentsPage />} />
              <Route path="/en/twin-harmony-suite" element={<ApartmentDetailPage />} />
              <Route path="/en/duo-deluxe-studio" element={<ApartmentDetailPage />} />
              <Route path="/en/cosy-couple-nest" element={<ApartmentDetailPage />} />
              <Route path="/en/trio-harmony-suite" element={<ApartmentDetailPage />} />
              <Route path="/en/about" element={<AboutPage />} />
              <Route path="/en/contact" element={<ContactPage />} />
              <Route path="/en/anleitungen" element={<AnleitungenPage />} />
              <Route path="/en/anleitungen-post/:slug" element={<AnleitungDetailPage />} />
              <Route path="/en/datenschutz" element={<DatenschutzPage />} />
              <Route path="/en/impressum" element={<ImpressumPage />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </I18nProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
