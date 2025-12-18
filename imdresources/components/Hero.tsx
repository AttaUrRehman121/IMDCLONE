import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light green/blue abstract blob shape */}
        <div 
          className="absolute -right-20 -bottom-20 w-96 h-96 bg-gradient-to-br from-green-200 via-green-300 to-lime-300 opacity-30 rounded-full blur-3xl"
        ></div>
        <div 
          className="absolute -left-20 top-20 w-80 h-80 bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 opacity-20 rounded-full blur-3xl"
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh] py-12 sm:py-16 lg:py-20">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Dr M App
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 leading-tight">
                Your Ultimate Medical Life
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight">
                Companion & Learning Hub
              </h2>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/95 max-w-2xl">
              The only Biggest Medical Resources' hub on Earth with more than{' '}
              <span className="font-bold text-white bg-yellow-400 text-yellow-900 px-2 sm:px-3 py-1 sm:py-1.5 rounded inline-block">
                45,000
              </span>{' '}
              Medical and Pharmaceutical Resources & Databases now available globally to our valued subscribers.
            </p>
          </div>

          {/* Right Side - Image with decorative background */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Decorative background shape behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-green-300 to-lime-300 opacity-20 rounded-3xl blur-2xl transform rotate-6 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 opacity-15 rounded-3xl blur-2xl transform -rotate-6 scale-110"></div>
              
              {/* Image container */}
              <div className="relative z-10 w-full aspect-[3/4] sm:aspect-[4/5]">
                <div className="relative w-full h-full">
                  <Image
                    src="/IMG_0762.webp"
                    alt="Medical professional in teal scrubs with stethoscope, smiling with crossed fingers"
                    fill
                    className="object-contain object-center drop-shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
