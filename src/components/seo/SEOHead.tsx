import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDynamicSeoData, getSiteUrl, defaultSeoData } from '../../data/seoConfig';

const setMetaTag = (attributeName: 'name' | 'property', attributeValue: string, content: string) => {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setCanonicalUrl = (url: string) => {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
};

const setJsonLdScript = (jsonLdData?: Record<string, any> | Array<Record<string, any>>) => {
  let scriptElement = document.getElementById('schema-jsonld');
  
  if (!jsonLdData) {
    if (scriptElement) {
      scriptElement.remove();
    }
    return;
  }

  if (!scriptElement) {
    scriptElement = document.createElement('script');
    scriptElement.id = 'schema-jsonld';
    scriptElement.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptElement);
  }

  scriptElement.textContent = JSON.stringify(jsonLdData, null, 2);
};

export const SEOHead: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seoData = getDynamicSeoData(pathname);
    const siteUrl = getSiteUrl();
    const currentCanonicalUrl = `${siteUrl}${pathname}`;
    const ogImageAbsolute = seoData.ogImage?.startsWith('http')
      ? seoData.ogImage
      : `${siteUrl}${seoData.ogImage || defaultSeoData.ogImage}`;

    // 1. Page Title
    document.title = seoData.title;

    // 2. Standard Meta Description
    setMetaTag('name', 'description', seoData.description);

    // 3. Canonical URL
    setCanonicalUrl(currentCanonicalUrl);

    // 4. OpenGraph Metadata
    setMetaTag('property', 'og:title', seoData.title);
    setMetaTag('property', 'og:description', seoData.description);
    setMetaTag('property', 'og:url', currentCanonicalUrl);
    setMetaTag('property', 'og:type', seoData.ogType || 'website');
    setMetaTag('property', 'og:site_name', 'Виктория Славоладова — Английский язык');
    setMetaTag('property', 'og:image', ogImageAbsolute);

    // 5. Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seoData.title);
    setMetaTag('name', 'twitter:description', seoData.description);
    setMetaTag('name', 'twitter:image', ogImageAbsolute);

    // 6. Schema.org JSON-LD Structured Data
    setJsonLdScript(seoData.jsonLd);

  }, [pathname]);

  return null;
};
