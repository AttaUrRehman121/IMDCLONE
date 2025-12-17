import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              iMD App
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Your Ultimate Medical Life Companion & Learning Hub
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-blue-100">
              The only Biggest Medical Resources' hub on Earth with more than <span className="font-bold text-white">45,000</span> Medical and Pharmaceutical Resources & Databases now available globally to our valued subscribers.
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 transform rotate-3">
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-green-50 rounded-xl relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face"
                    alt="Medical professional in scrubs"
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 500px"
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
