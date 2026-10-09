import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { DirectionGatewaySection } from '../components/sections/DirectionGatewaySection';
import { HomeNewsAndFreeMaterials } from '../components/sections/HomeNewsAndFreeMaterials';
import { BottomCTASection } from '../components/sections/BottomCTASection';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0 w-full h-auto overflow-visible">
      <HeroSection />
      <DirectionGatewaySection />
      <HomeNewsAndFreeMaterials />
      <BottomCTASection />
    </div>
  );
};
