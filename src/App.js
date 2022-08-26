import React from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Download from "./Components/Download";
import Faq from "./Components/FAQ";
import Cta from "./Components/CTA";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Features />
      <Download />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
