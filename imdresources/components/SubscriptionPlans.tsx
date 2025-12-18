'use client';

interface Plan {
  id: string;
  name: string;
  duration: string;
  days: number;
  price: number;
  features: string[];
}

const plans: Plan[] = [
  {
    id: '6months',
    name: '6 Months Subscription',
    duration: '6 Months',
    days: 180,
    price: 50,
    features: [
      'Full Access For 180 Days',
      'VIP Premium Plan',
      'International IP Use',
      'Unlimited Access to All Databases',
      'Unlock 45,000+ Premium Resources'
    ]
  },
  {
    id: '1year',
    name: '1-Year Subscription',
    duration: '1 Year',
    days: 365,
    price: 75,
    features: [
      'Full Access For 365 Days',
      'VIP Premium Plan',
      'International IP Use',
      'Unlimited Access to All Databases',
      'Unlock 45,000+ Premium Resources'
    ]
  },
  {
    id: '2years',
    name: '2-Year Subscription',
    duration: '2 Years',
    days: 730,
    price: 150,
    features: [
      'Full Access For 730 Days',
      'VIP Premium Plan',
      'International IP Use',
      'Unlimited Access to All Databases',
      'Unlock 45,000+ Premium Resources'
    ]
  }
];

// WhatsApp number - Replace with actual number (format: country code + number, no + or spaces)
const WHATSAPP_NUMBER = '923091190715';

export default function SubscriptionPlans({ onSubscribe }: { onSubscribe: (planId: string) => void }) {
  const handleWhatsAppRedirect = (plan: Plan, action: 'subscribe' | 'extend') => {
    const message = encodeURIComponent(
      `Hello! I'm interested in ${action === 'subscribe' ? 'subscribing to' : 'extending'} the ${plan.name} ($${plan.price}). Please provide more information.`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section id="subscribe" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
          CHOOSE YOUR DR M SUBSCRIPTION PLAN
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white border-2 border-gray-300 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
                {plan.name}
              </h3>
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">${plan.price}</span>
              </div>
              
              <ul className="space-y-3 md:space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsAppRedirect(plan, 'subscribe')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold text-sm md:text-base uppercase tracking-wide"
                >
                  SUBSCRIBE NOW
                </button>
                <button
                  onClick={() => handleWhatsAppRedirect(plan, 'extend')}
                  className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition font-bold text-sm md:text-base uppercase tracking-wide"
                >
                  EXTEND NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
