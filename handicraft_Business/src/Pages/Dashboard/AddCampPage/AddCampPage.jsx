
const AddCampPage = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center bg-gray-100">
      <div className="max-w-xl w-full p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Add a Camp</h1>
        <form className="space-y-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label htmlFor="campName" className="block text-sm font-medium">
                Camp Name
              </label>
              <input
                type="text"
                id="campName"
                name="campName"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label htmlFor="image" className="block text-sm font-medium">
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label htmlFor="campFees" className="block text-sm font-medium">
                Camp Fees
              </label>
              <input
                type="text"
                id="campFees"
                name="campFees"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="scheduledDateTime"
                className="block text-sm font-medium"
              >
                Scheduled Date and Time
              </label>
              <input
                type="datetime-local"
                id="scheduledDateTime"
                name="scheduledDateTime"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label htmlFor="venueLocation" className="block text-sm font-medium">
                Venue Location
              </label>
              <input
                type="text"
                id="venueLocation"
                name="venueLocation"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="specializedServices"
                className="block text-sm font-medium"
              >
                Specialized Services Provided
              </label>
              <input
                type="text"
                id="specializedServices"
                name="specializedServices"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="healthcareProfessionals"
                className="block text-sm font-medium"
              >
                Healthcare Professionals in Attendance
              </label>
              <input
                type="text"
                id="healthcareProfessionals"
                name="healthcareProfessionals"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label htmlFor="targetAudience" className="block text-sm font-medium">
                Target Audience
              </label>
              <input
                type="text"
                id="targetAudience"
                name="targetAudience"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="participantCount"
                className="block text-sm font-medium"
              >
                Participant Count
              </label>
              <input
                type="text"
                id="participantCount"
                name="participantCount"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Comprehensive Details
              </label>
              <textarea
                id="description"
                name="description"
                rows="2"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2">
              <label htmlFor="moreDetails" className="block text-sm font-medium">
                More Details
              </label>
              <textarea
                id="moreDetails"
                name="moreDetails"
                rows="2"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampPage;
