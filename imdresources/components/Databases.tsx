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
    <section id="databases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Databases & Resources
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Access over 45,000 premium medical and pharmaceutical resources covering all aspects of medical education and practice.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {category}
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive collection of resources in this category
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-4">
            And many more categories with thousands of resources...
          </p>
          <p className="text-2xl font-bold text-blue-600">
            45,000+ Premium Resources Available
          </p>
        </div>
      </div>
    </section>
  );
}

