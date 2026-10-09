import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { SEOHead } from '../seo/SEOHead';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 w-full overflow-x-hidden overflow-y-visible">
      <SEOHead />
      <Header />
      <Breadcrumbs />
      <main className="flex-grow w-full h-auto overflow-visible">
        {children}
      </main>
      <Footer />
    </div>
  );
};
