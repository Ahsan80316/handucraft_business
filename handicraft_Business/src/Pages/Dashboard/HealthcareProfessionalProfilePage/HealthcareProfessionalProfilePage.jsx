import Lottie from "lottie-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import loadingAnimation from "../../../../public/animation.json";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useUserData from "../../../Hook/useUserData";

const HealthcareProfessionalProfilePage = () => {
  const [userData, isLoading, isError, refetch] = useUserData();
  const [formData, setFormData] = useState({ ...userData });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        name,
        medicalSpecialty,
        certifications,
        contactInformation,
        impact,
      } = formData;
      const email = userData?.email;
      const updateInfo = {
        name,
        email,
        medicalSpecialty,
        certifications,
        contactInformation,
        impact,
      };

      const response = await axiosSecure.patch(
        `/update-healthcare-professional-profile?email=${userData?.email}`,
        updateInfo
      );

      if (response.status === 200) {
        setIsModalOpen(false);
        toast.success("Healthcare Professional Profile Updated successfully");
        refetch();
      }
    } catch (error) {
      toast.error("Error updating healthcare professional profile");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Healthcare Professional Profile
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isLoading ? (
            <Lottie
              className="flex justify-center items-center min-h-[70%]"
              animationData={loadingAnimation}
              width={500}
              height={350}
            />
          ) : isError ? (
            <div>Error loading profile data.</div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <p className="mt-1 text-lg text-gray-900">{userData?.name}</p>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <p className="mt-1 text-lg text-gray-900">{userData.email}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Medical Specialty
                </label>
                <input
                  type="text"
                  id="medicalSpecialty"
                  name="medicalSpecialty"
                  defaultValue={userData.medicalSpecialty}
                  value={formData.medicalSpecialty}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Certifications
                </label>
                <input
                  type="text"
                  id="certifications"
                  name="certifications"
                  defaultValue={userData.medicalSpecialty}
                  value={formData.certifications}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Contact Information
                </label>
                <input
                  type="text"
                  id="contactInformation"
                  name="contactInformation"
                  value={formData.contactInformation}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Impact
                </label>
                <input
                  type="text"
                  id="impact"
                  name="impact"
                  value={formData.impact}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-md"
                />
              </div>

              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => setIsModalOpen(true)}
              >
                Update Profile
              </button>

              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Update Profile Modal"
              >
                <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="medicalSpecialty"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Medical Specialty
                    </label>
                    <input
                      type="text"
                      id="medicalSpecialty"
                      name="medicalSpecialty"
                      value={formData.medicalSpecialty}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="certifications"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Certifications
                    </label>
                    <input
                      type="text"
                      id="certifications"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="contactInformation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Information
                    </label>
                    <input
                      type="text"
                      id="contactInformation"
                      name="contactInformation"
                      value={formData.contactInformation}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="impact"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Impact
                    </label>
                    <input
                      type="text"
                      id="impact"
                      name="impact"
                      value={formData.impact}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full rounded-md"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="ml-2 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Modal>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthcareProfessionalProfilePage;
