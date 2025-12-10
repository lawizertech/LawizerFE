export default function ProfileTab() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p className="text-gray-600 mb-6">Update your professional details.</p>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-xl">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-700 font-medium">Name</label>
            <input
              className="w-full border mt-1 p-2 rounded-md"
              placeholder="Advocate Name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700 font-medium">
              Profession
            </label>
            <input
              className="w-full border mt-1 p-2 rounded-md"
              placeholder="Lawyer / CA"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700 font-medium">
              Location
            </label>
            <input
              className="w-full border mt-1 p-2 rounded-md"
              placeholder="City, State"
            />
          </div>

          <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
