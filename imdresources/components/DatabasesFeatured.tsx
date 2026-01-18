import Image from 'next/image';

export default function DatabasesFeatured() {
  const drugReferences = [
    'Micromedex 2025 (Drug Interaction, Drug Reference, IV Compatibility, NeoFax, Pediatrics)',
    'Sanford Guide 2025',
    'Martindale: The Complete Drug Reference',
    'Drug Facts and Comparison',
    'Applied Therapeutics'
  ];

  const usmleComlex = [
    'USMLE Step 1, Step 2, Step 3',
    'USMLE Step 1, Step 2, Step 3 Practice Exams',
    'COMLEX Level 1',
    'COMVEX'
  ];

  const medicalSpecialties = [
    'Internal Medicine (Practice Exam, Shelf Exam, MOC)',
    'Family Medicine (Shelf Exam, QBank)',
    'Emergency Medicine (MOC, Shelf Exam)',
    'Surgery Shelf Exam',
    'Psychiatry (QBank, Shelf Exam, Practice Exam, MOC)',
    'Pediatrics (QBank, Shelf Exam, MOC, Practice Exam)',
    'Dermatology MOC',
    'Neurology (Child Neurology, MOC)',
    'Cardiology (QBank, MOC)',
    'Gastroenterology, Geriatric Medicine',
    'Otolaryngology (QBank, MOC)',
    'Pathology (QBank, MOC)',
    'Ophthalmology, Radiography, Anesthesiology, Pain Medicine',
    'Allergy & Immunology, Infectious Disease',
    'Physical Medicine & Rehabilitation',
    'Addiction Medicine, Hospice & Palliative Medicine',
    'Preventive Medicine (QBank, MOC)'
  ];

  const nursingQBanks = [
    'PANCE/PANRE QBank',
    'ANCC Family Nurse Practitioner',
    'Adult-Gerontology Acute & Primary Care NP',
    'Pediatric Nurse Practitioner (Acute & Primary Care)',
    'Critical Care Nursing',
    'Psychiatric-Mental Health Nurse Practitioner',
    'Certified Pediatric Nurse',
    'Certified Nurse Midwife'
  ];

  const qbanksPlatforms = [
    'UWorld QBanks (Step 1, Step 2, Step 3)',
    'USMLE-Rx, Amboss, CanadaQBank'
  ];

  const videoLectures = [
    'Doctors In Training Courses',
    'Kaplan USMLE Step 1, Step 2, Step 3 Online Prep & High-Yield Videos'
  ];

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Drug References & Pharmacology Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="flex justify-center mb-4 md:mb-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
                    alt="Medical professional with tablet"
                    width={192}
                    height={192}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="bg-blue-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Drug References & Pharmacology</h2>
              <ul className="space-y-2 sm:space-y-3">
                {drugReferences.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 sm:mr-3 text-green-400 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 bg-green-100 rounded-lg p-4 sm:p-6 max-w-3xl mx-auto">
            <p className="text-gray-800 text-center text-base sm:text-lg">
              Dr M medical resources offers access to a plethora of Medical Databases & Resources to ace your USMLE in just one place!
            </p>
          </div>
        </div>
      </section>

      {/* BoardVitals Question Banks Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1 mb-4 md:mb-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
                    alt="Medical professional in white lab coat"
                    width={192}
                    height={192}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">BoardVitals Question Banks 2025</h2>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">USMLE & COMLEX Question Banks</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                  {usmleComlex.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Medical Specialties Question Banks</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {medicalSpecialties.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
                <p className="text-sm sm:text-base text-gray-700 flex items-start">
                  <span className="mr-2 flex-shrink-0">•</span>
                  <span>{item}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nursing & Allied Health Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="flex justify-center mb-4 md:mb-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop&crop=face"
                    alt="Medical professional in blue scrubs"
                    width={192}
                    height={192}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="bg-blue-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Nursing & Allied Health QBanks</h2>
              <ul className="space-y-2 sm:space-y-3">
                {nursingQBanks.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 sm:mr-3 text-green-400 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USMLE Exam Study Materials Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">USMLE Exam Study Materials</h2>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">QBanks & Study Platforms</h3>
                  <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                    {qbanksPlatforms.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Video Lectures</h3>
                  <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                    {videoLectures.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face"
                    alt="Medical professional working on laptop"
                    width={192}
                    height={192}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

