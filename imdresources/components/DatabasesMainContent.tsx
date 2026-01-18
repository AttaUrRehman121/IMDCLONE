'use client';

import Link from 'next/link';

const WHATSAPP_NUMBER = '923181617213'; // 0318 1617213 (Pakistan: 92 + 3181617213)

export default function DatabasesMainContent() {
  const questionBanks = [
    'UWORLD Qbanks',
    'Uworld Medical Library',
    'UWORLD Self assessments all',
    'UWORLD Ready Decks flashcards',
    'CanadaQbank',
    'AceQBank',
    'NBME Self assessments for USMLE Steps 1,2&3',
    'CMS Forms for USMLE Step 2CK',
    'CMS Subject Exams',
    'BoardVitals Qbanks',
    'BMJ OnExamination Qbanks',
    'RADPrimer Lessons & Qbank',
    'AMEDEX Qbank for AMC',
    'MPlusX Qbank for AMC',
    'PassMedicine Qbanks',
    'Amboss Qbanks + Amboss Library',
    'MKSAP',
    'MCC – MCCQE Qbank',
    'eMedici QBank for AMC',
    'Mehlman QBanks all',
    '& more'
  ];

  const drugReferences = [
    'Lexicomp',
    'Micromedex',
    '& more'
  ];

  const clinicalPractice = [
    'Uptodate(same as website)',
    'Epocrates',
    'VisualDx',
    'eTG Therapeutic Guidelines',
    'Sanforrd guide',
    'RSNA Journals',
    'MKSAP',
    'Amirsys Statdx',
    '& more'
  ];

  const videoTraining = [
    'Boards and Beyonds',
    'Pixorize',
    'Lecturio',
    'Osmosis',
    'USMLE RX Videos',
    'Oakstone CME',
    'Radiopaedia',
    'MRI-Online Videos',
    'Accessmedicine Procedural Videos',
    'Mayo Clinic',
    '123Sonography',
    'MHMedical',
    'DoctorsInTraining',
    'Kaplan',
    '& lots of more'
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Question Banks */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-gray-600">⁉️</span>
                Question Banks:
              </h2>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                {questionBanks.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drug References */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-red-600">💉</span>
                <span className="text-blue-600">💊</span>
                Drug References:
              </h2>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                {drugReferences.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Books & References */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-amber-600">📚</span>
                <span className="text-amber-700">📖</span>
                Books & References:
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                More than 30 thousand latest Books & References from Elsevier, McGrawHill, Thieme, LWW, Oxford, … Along with their Videos.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Clinical Practice Resources */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-purple-600">🏥</span>
                <span className="text-blue-600">🩺</span>
                Clinical Practice Resources:
              </h2>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                {clinicalPractice.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Training & Lectures */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-gray-800">🎥</span>
                Video Training & Lectures:
              </h2>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                {videoTraining.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe CTA */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border-2 border-purple-200">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-red-600">🔥</span>
                <span className="text-sm sm:text-base md:text-lg">GET all of these premium resources in SINGLE subscription.</span>
              </h3>
              <p className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                Dr M – Your Smart Study Partner!
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent('Hello! I would like to subscribe to Dr M medical resources. Please provide more information.');
                  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full sm:w-auto inline-block bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

