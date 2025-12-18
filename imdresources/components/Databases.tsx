export default function Databases() {
  const categories = [
    'Medical Textbooks & References',
    'Pharmaceutical Databases',
    'USMLE Question Banks',
    'Medical Video Lectures',
    'Clinical Guidelines',
    'Drug Information Systems',
    'Medical Journals & Research',
    'Anatomy & Physiology Resources',
    'Pathology Databases',
    'Pharmacology Resources',
    'Medical Imaging Databases',
    'Case Studies & Clinical Scenarios'
  ];

  return (
    <section id="databases" className="py-12 sm:py-16 md:py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-blue-900">
          Databases & Resources
        </h2>
        <p className="text-center text-blue-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg px-4">
          Access over 45,000 premium medical and pharmaceutical resources covering all aspects of medical education and practice.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
            >
              <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-2">
                {category}
              </h3>
              <p className="text-xs sm:text-sm text-blue-600">
                Comprehensive collection of resources in this category
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
            And many more categories with thousands of resources...
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
            45,000+ Premium Resources Available
          </p>
        </div>
      </div>
      
      {/* Bottom Left Icon - Dark gray circle with N */}
      <div className="absolute bottom-6 left-6 hidden md:block">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">N</span>
        </div>
      </div>
    </section>
  );
}

