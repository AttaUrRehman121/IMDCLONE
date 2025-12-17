'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Databases from '@/components/Databases';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Features from '@/components/Features';
import OneLogin from '@/components/OneLogin';
import Footer from '@/components/Footer';
import AccountModal from '@/components/AccountModal';

export default function Home() {
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
        <Hero />
        <Databases />
        <SubscriptionPlans onSubscribe={handleSubscribe} />
        <Features />
        <OneLogin />
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
