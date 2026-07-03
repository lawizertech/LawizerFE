import React from "react";
import Image from "next/image";

export function TopAdvocatesSection() {
  const advocates = [
    {
      name: "Adv. Chandramouli Bagchi",
      expertise: "Advocate, General Practice",
      experience: "15 years",
    },
    {
      name: "Adv. Himadree Ghosh",
      expertise: "Property, Criminal, Matrimonial, Writ, Drafting",
      experience: "12 years",
    },
    {
      name: "Adv. Rahul Das",
      expertise: "Civil Lawyer",
      experience: "10 years",
    },
    {
      name: "Adv. Indranil Banerjee",
      expertise: "Property, Criminal (NDPS), Drafting, Civil",
      experience: "14 years",
    },
    {
      name: "Adv. Sakshi Srivastava",
      expertise: "Family, Criminal, Arbitration",
      experience: "11 years",
    },
    {
      name: "Adv. Krishnendu Modak",
      expertise: "Civil, Criminal, Company, Family, Consumer",
      experience: "13 years",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="top-advocates">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-8">Meet Our Top Advocates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advocates.map((adv, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 text-center">
              {/* Placeholder avatar */}
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl font-medium text-gray-600">{adv.name.split(" ")[1][0]}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{adv.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{adv.expertise}</p>
              <div className="flex items-center mt-2">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.405 2.475a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.541 1.118l-3.405-2.475a1 1 0 00-1.175 0l-3.405 2.475c-.786.57-1.84-.197-1.541-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.17 9.384c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">4.9/5</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{adv.experience} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
