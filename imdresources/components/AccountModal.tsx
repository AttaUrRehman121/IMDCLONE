'use client';

import { useState, useEffect } from 'react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const plans = {
  '6months': { name: '6-Months International VIP Premium Account', price: 50 },
  '1year': { name: '1-Year International VIP Premium Account', price: 75 },
  '2years': { name: '2-Years International VIP Premium Account', price: 150 }
};

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
  'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada',
  'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
  'Congo (Congo-Brazzaville)', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus',
  'Czechia (Czech Republic)', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
  'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
  'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
  'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
  'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran',
  'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
  'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
  'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
  'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
  'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
  'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
  'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia',
  'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea',
  'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
  'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
  'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea',
  'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
  'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo',
  'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
  'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
  'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
  'Yemen', 'Zambia', 'Zimbabwe', 'Other Country'
];

export default function AccountModal({ isOpen, onClose, selectedPlan = '1year' }: AccountModalProps) {
  const [accountType, setAccountType] = useState(selectedPlan);
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'local'>('crypto');
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    if (selectedPlan) {
      setAccountType(selectedPlan);
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const currentPlan = plans[accountType as keyof typeof plans] || plans['1year'];
  const cryptoAddresses = {
    bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    tether: 'TXYZabcdefghijklmnopqrstuvwxyz1234567890',
    bep20: '0x1234567890abcdef1234567890abcdef12345678'
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Create iMD Account</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl"
            >
              ×
            </button>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Select Account Type:
            </label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="6months">{plans['6months'].name}</option>
              <option value="1year">{plans['1year'].name}</option>
              <option value="2years">{plans['2years'].name}</option>
            </select>
          </div>

          <div className="mb-6">
            <p className="text-lg font-semibold mb-4">
              Price: ${currentPlan.price}
            </p>
          </div>

          <div className="mb-6">
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setPaymentMethod('crypto')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold ${
                  paymentMethod === 'crypto'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Pay with Crypto
              </button>
              <button
                onClick={() => setPaymentMethod('local')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold ${
                  paymentMethod === 'local'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Pay Locally
              </button>
            </div>

            {paymentMethod === 'crypto' && (
              <div className="space-y-4">
                <p className="font-semibold">
                  Transfer <strong>${currentPlan.price}</strong> via Bitcoin (BTC) or Tether (USDT-TRC20):
                </p>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Bitcoin address:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={cryptoAddresses.bitcoin}
                      readOnly
                      className="flex-1 p-2 border border-gray-300 rounded"
                    />
                    <button
                      onClick={() => copyToClipboard(cryptoAddresses.bitcoin)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tether (TRC20) address:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={cryptoAddresses.tether}
                      readOnly
                      className="flex-1 p-2 border border-gray-300 rounded"
                    />
                    <button
                      onClick={() => copyToClipboard(cryptoAddresses.tether)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">BEP20 USDT Address:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={cryptoAddresses.bep20}
                      readOnly
                      className="flex-1 p-2 border border-gray-300 rounded"
                    />
                    <button
                      onClick={() => copyToClipboard(cryptoAddresses.bep20)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-4">
                  After paying, please send the TXID/transaction screenshot and contact via:
                </p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-blue-600 hover:underline">WhatsApp</a>
                  <a href="mailto:support@imdresources.com" className="text-blue-600 hover:underline">Email</a>
                  <a href="#" className="text-blue-600 hover:underline">Telegram</a>
                </div>
              </div>
            )}

            {paymentMethod === 'local' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Country:</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-blue-600 hover:underline">WhatsApp</a>
                  <a href="mailto:support@imdresources.com" className="text-blue-600 hover:underline">Email</a>
                  <a href="#" className="text-blue-600 hover:underline">Telegram</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

