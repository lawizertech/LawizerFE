import React from "react";

export function UserDashboardSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Your Personal Dashboard (Coming Soon)
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Track the progress of your legal work, view status updates, and easily upload required documents all in one
          place.
        </p>
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          // future connection logic will be added here
        >
          Connect to Dashboard later
        </button>
      </div>
    </section>
  );
}

export default UserDashboardSection;
