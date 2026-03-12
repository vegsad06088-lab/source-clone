import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import { useEffect } from "react";
import { getConsent, loadAnalytics, loadMarketing, loadSmoobu } from "@/lib/cookieConsent";

export default function Layout() {
  useEffect(() => {
    const consent = getConsent();

    if (consent.analytics) loadAnalytics();
    if (consent.marketing) loadMarketing();
    if (consent.essential) loadSmoobu();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
