'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "Vše Pro Stavby";
    
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#2563eb" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    if (faviconLink) {
      faviconLink.setAttribute('href', faviconUrl);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-3xl font-bold tracking-tight">
            Vše Pro Stavby
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-200 transition-colors duration-300">O nás</a>
            <a href="#services" className="hover:text-blue-200 transition-colors duration-300">Služby</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors duration-300">Kontakt</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <nav className={`md:hidden absolute top-full left-0 w-full bg-blue-700 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-screen py-4' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="flex flex-col items-center space-y-4">
            <a href="#about" onClick={closeMenu} className="block text-white text-lg hover:text-blue-200 transition-colors duration-300">O nás</a>
            <a href="#services" onClick={closeMenu} className="block text-white text-lg hover:text-blue-200 transition-colors duration-300">Služby</a>
            <a href="#contact" onClick={closeMenu} className="block text-white text-lg hover:text-blue-200 transition-colors duration-300">Kontakt</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative pt-24 pb-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center min-h-[50vh] md:min-h-[70vh]">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">Vše Pro Stavby</h1>
            <p className="text-lg md:text-xl mb-8 opacity-0 animate-fadeInUp animation-delay-300">Váš spolehlivý partner pro komplexní stavební řešení.</p>
            <a href="#contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 opacity-0 animate-fadeInUp animation-delay-600">
              Kontaktujte nás
            </a>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">O nás</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">Společnost Vše Pro Stavby se specializuje na široké spektrum stavebních služeb. S dlouholetými zkušenostmi a týmem kvalifikovaných odborníků jsme vaším ideálním partnerem pro jakýkoli stavební projekt, od menších rekonstrukcí po rozsáhlé developerské projekty.</p>
              <p>Naším cílem je poskytovat vysoce kvalitní služby, které splňují a překračují očekávání našich klientů. Klíčem k našemu úspěchu je individuální přístup, dodržování termínů a transparentní komunikace.</p>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Naše služby</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 6h6m-6 2h6m-6 4h6m-6 2h6m-6 4h6m-6 2h6"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Generální dodávky staveb</h3>
                <p className="text-gray-600">Kompletní realizace stavebních projektů od A do Z, včetně projektového řízení a koordinace všech profesí.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Zednické a výkopové práce</h3>
                <p className="text-gray-600">Precizní zednické práce a efektivní výkopové práce pro základy i inženýrské sítě.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.515-1.554 2.062-2.133 3.535-1.516 1.455.603 2.01 2.227 1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c.515-1.554 2.062-2.133 3.535-1.516 1.455.603 2.01 2.227 1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c.515-1.554 2.062-2.133 3.535-1.516 1.455.603 2.01 2.227 1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c.515-1.554 2.062-2.133 3.535-1.516 1.455.603 2.01 2.227 1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c.515-1.554 2.062-2.133 3.535-1.516 1.455.603 2.01 2.227 1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-1.536.565-2.12 2.112-1.516 3.535.603 1.455 2.227 2.01 3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m-.485 5.512c.517.478 1.144.93 1.83 1.34L14.99 7.425zM10.325 4.317c-.515-1.554-2.062-2.133-3.535-1.516-1.455.603-2.01 2.227-1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c-.515-1.554-2.062-2.133-3.535-1.516-1.455.603-2.01 2.227-1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c-.515-1.554-2.062-2.133-3.535-1.516-1.455.603-2.01 2.227-1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c-.515-1.554-2.062-2.133-3.535-1.516-1.455.603-2.01 2.227-1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c-.515-1.554-2.062-2.133-3.535-1.516-1.455.603-2.01 2.227-1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c-.515-1.554-2.062-2.133-3.535-1.516-1.455.603-2.01 2.227-1.492 3.737L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317zM14.99 7.425l-2.022 2.022m.485 5.512c-.517.478-1.144.93-1.83 1.34L14.99 7.425zM10.325 4.317c1.536.565 2.12 2.112 1.516 3.535-.603 1.455-2.227 2.01-3.737 1.492L10.325 4.317z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Rekonstrukce a modernizace</h3>
                <p className="text-gray-600">Odborné rekonstrukce bytů, domů a komerčních prostor s důrazem na moderní materiály.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-2.5m0 5h10m0 0V8.5m0 2.5v2.5m0-5h-10m0 0V8.5m1.5 5.5V14m0-2.5v-2.5m0 5H16m0 0V8.5m0 2.5v2.5m0-5h-10m0 0V8.5m1.5 5.5V14m0-2.5v-2.5m0 5H16m0 0V8.5m0 2.5v2.5m0-5h-10m0 0V8.5m1.5 5.5V14m0-2.5v-2.5m0 5H16m0 0V8.5m0 2.5v2.5m0-5h-10m0 0V8.5m-3-1l-2-2m0 0V5.5a2.5 2.5 0 00-2.5-2.5h-1.5A2.5 2.5 0 004 5.5V19m0 0h16A2 2 0 0018 17V7a2 2 0 00-2-2H8a2 2 0 00-2 2v10z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Izolace a zateplení</h3>
                <p className="text-gray-600">Efektivní tepelné a zvukové izolace pro optimální komfort a úspory energií.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Demoliční práce</h3>
                <p className="text-gray-600">Bezpečná a efektivní demolice staveb a objektů s důrazem na ekologickou likvidaci.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Ostatní stavební činnosti</h3>
                <p className="text-gray-600">Nabízíme širokou škálu dalších stavebních prací dle individuálních požadavků klienta.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">Kontaktujte nás</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Máte dotazy nebo potřebujete konzultaci k vašemu projektu? Neváhejte nás kontaktovat.</p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-inner max-w-lg mx-auto">
              <div className="mb-6 text-left">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Adresa:</h3>
                <p className="text-gray-800">
                  <a href="https://maps.app.goo.gl/25J5eG44wM1bS4Vv7" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500">
                    U Stadionu 1275/2, 692 01 Mikulov
                  </a>
                </p>
              </div>
              <div className="mb-6 text-left">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Telefon:</h3>
                <p className="text-gray-800">
                  <a href="tel:+420728639257" className="hover:underline text-blue-500">+420 728 639 257</a>
                </p>
              </div>
              <div className="mb-0 text-left">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Email:</h3>
                <p className="text-gray-800">
                  <a href="mailto:info@vseprostavby.cz" className="hover:underline text-blue-500">info@vseprostavby.cz</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-6 text-center mt-16">
        <div className="container mx-auto px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Vše Pro Stavby. Všechna práva vyhrazena.</p>
          <p className="text-sm mt-2">
            Vytvořeno s láskou od{' '}
            <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:underline">
              DigitalFusion
            </a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
