'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccountModal from '@/components/AccountModal';
import DatabasesHero from '@/components/DatabasesHero';
import DatabasesMainContent from '@/components/DatabasesMainContent';
import DatabasesFeatured from '@/components/DatabasesFeatured';

export default function DatabasesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('1year');

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onAccountClick={() => {
        setSelectedPlan('1year');
        setIsModalOpen(true);
      }} />
      <main className="flex-grow">
        <DatabasesHero />
        <DatabasesMainContent />
        <DatabasesFeatured />
      </main>
      <Footer />
      <AccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}

