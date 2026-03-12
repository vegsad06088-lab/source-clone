import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider, LANGUAGE_PACK, Lang } from "@/lib/i18n";
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
import ScrollToTop from "@/components/ScrollToTop";
import CookiePolicy from "@/pages/CookiePolicy";
import AGBPage from "@/pages/AGBPage";
import BookingConditionsPage from "@/pages/BookingConditionsPage";

const queryClient = new QueryClient();

function LangWrapper() {
  const { lang } = useParams();

  const selectedLang: Lang = LANGUAGE_PACK.includes(lang as Lang)
    ? (lang as Lang)
    : "de";

  return (
    <I18nProvider initialLang={selectedLang}>
      <Layout>
        <Routes>
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
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/agb" element={<AGBPage />} />
          <Route path="/booking-conditions" element={<BookingConditionsPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </I18nProvider>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/:lang/*" element={<LangWrapper />} />
            <Route path="*" element={<Navigate to="/de" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
