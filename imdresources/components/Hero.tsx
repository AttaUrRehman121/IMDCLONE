import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 py-16 md:py-24 relative overflow-hidden min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-white z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              iMD App
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-tight">
              Your Ultimate Medical Life
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Companion & Learning Hub
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white max-w-2xl">
              The only Biggest Medical Resources' hub on Earth with more than <span className="font-bold text-white bg-yellow-400 text-yellow-900 px-2 py-1 rounded">45,000</span> Medical and Pharmaceutical Resources & Databases now available globally to our valued subscribers.
            </p>
          </div>
          
          {/* Right Side - Image with Green Blob */}
          <div className="relative z-10 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg">
              {/* Large light green/lime green organic blob shape */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-200 via-green-300 to-lime-300 rounded-full opacity-90"
                style={{
                  clipPath: 'ellipse(90% 75% at 60% 50%)',
                  transform: 'scale(1.2)',
                  top: '-10%',
                  right: '-10%',
                  bottom: '-10%',
                  left: '-10%'
                }}
              ></div>
              
              {/* Medical professional image */}
              <div className="relative z-10 w-full aspect-square max-w-md">
                <div className="relative w-full h-full">
                  <Image
                    src="/IMG_0762.webp"
                    alt="Medical professional in teal scrubs with stethoscope, smiling with crossed fingers"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Left Icon - Dark blue circle with N */}
      <div className="absolute bottom-6 left-6 z-20 hidden md:block">
        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">N</span>
        </div>
      </div>
    </section>
  );
}
