import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import NewsletterSection from "./components/NewsletterSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <Pricing />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
