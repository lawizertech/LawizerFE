export default function DashboardTab() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Lawyer Dashboard</h1>
      <p className="text-gray-600">
        Manage your consultations, clients, and profile here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Upcoming Bookings</h2>
          <p className="text-gray-500">You have 3 consultations this week.</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Profile Status</h2>
          <p className="text-gray-500">Your profile is 80% complete.</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Total Earnings</h2>
          <p className="text-gray-500">₹12,300 this month.</p>
        </div>
      </div>
    </div>
  );
}
