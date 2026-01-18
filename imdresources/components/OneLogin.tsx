'use client';

const WHATSAPP_NUMBER = '923181617213'; // 0318 1617213 (Pakistan: 92 + 3181617213)

export default function OneLogin() {
  const handleWhatsAppRedirect = (action: 'subscribe' | 'install') => {
    const message = encodeURIComponent(
      action === 'subscribe' 
        ? 'Hello! I would like to subscribe to Dr M medical resources. Please provide more information.'
        : 'Hello! I need help with installing the Dr M App. Please provide the installation guide.'
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
              One Login For Unlimited Learning with Dr M medical resources
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button 
                onClick={() => handleWhatsAppRedirect('subscribe')}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-50 transition w-full sm:w-auto"
              >
                Subscribe
              </button>
              <button 
                onClick={() => handleWhatsAppRedirect('install')}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition w-full sm:w-auto"
              >
                Install
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

