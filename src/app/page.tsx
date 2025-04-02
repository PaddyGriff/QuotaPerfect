'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    accountList: null as File | null,
    quotaCarriers: '',
    acv: '',
    annualRevenueTarget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        accountList: file
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1d21] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#2c2d30] rounded-xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Quota Perfect</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <label htmlFor="accountList" className="block text-lg font-medium text-white">
              Account List
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                id="accountList"
                accept=".csv"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-300
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#611f69] file:text-white
                  hover:file:bg-[#4a154b]"
                required
              />
              <span className="text-sm text-gray-400">
                {formData.accountList ? formData.accountList.name : 'No file chosen'}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="quotaCarriers" className="block text-lg font-medium text-white">
              Number of Quota Carriers
            </label>
            <input
              type="number"
              id="quotaCarriers"
              name="quotaCarriers"
              value={formData.quotaCarriers}
              onChange={handleChange}
              min="0"
              max="10000"
              className="mt-1 block w-full rounded-lg bg-[#1a1d21] border-0 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#611f69] text-lg p-3"
              required
            />
            <p className="text-sm text-gray-400">Enter a number between 0 and 10,000</p>
          </div>

          <div className="space-y-4">
            <label htmlFor="acv" className="block text-lg font-medium text-white">
              ACV (Annual Contract Value)
            </label>
            <input
              type="number"
              id="acv"
              name="acv"
              value={formData.acv}
              onChange={handleChange}
              min="0"
              max="100000000"
              className="mt-1 block w-full rounded-lg bg-[#1a1d21] border-0 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#611f69] text-lg p-3"
              required
            />
            <p className="text-sm text-gray-400">Enter a number between 0 and 100,000,000</p>
          </div>

          <div className="space-y-4">
            <label htmlFor="annualRevenueTarget" className="block text-lg font-medium text-white">
              Annual Revenue Target
            </label>
            <input
              type="number"
              id="annualRevenueTarget"
              name="annualRevenueTarget"
              value={formData.annualRevenueTarget}
              onChange={handleChange}
              min="0"
              max="100000000000"
              className="mt-1 block w-full rounded-lg bg-[#1a1d21] border-0 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#611f69] text-lg p-3"
              required
            />
            <p className="text-sm text-gray-400">Enter a number between 0 and 100,000,000,000</p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-lg font-medium text-white bg-[#611f69] hover:bg-[#4a154b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#611f69] focus:ring-offset-[#2c2d30] transition-colors duration-200"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
