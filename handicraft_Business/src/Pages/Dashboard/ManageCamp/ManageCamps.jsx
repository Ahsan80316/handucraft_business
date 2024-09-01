import { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../public/animation.json";
import { useAvailableCamps } from "../../../Hook/useAvailableCamps";

const ManageCamps = () => {
  const { data: availableCamp = [], isLoading, refetch } = useAvailableCamps();
  const axiosSecure = useAxiosSecure();
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    camp_fees: "",
    dateTime: "",
    location: "",
    services: "",
    professionals: "",
    participantCount: "",
    description: "",
  });

  const openModal = (camp) => {
    setSelectedCamp(camp);
    setFormData({
      name: camp.name,
    });
    setIsModalOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const name = e.target.name.value;
      const image = e.target.image.value;
      const camp_fees = e.target.camp_fees.value;
      const dateTime = e.target.dateTime.value;
      const location = e.target.location.value;
      const services = e.target.services.value;
      const professionals = e.target.professionals.value;
      const participantCount = e.target.participantCount.value;
      const comprehensiveDetails = e.target.comprehensiveDetails.value;
      const moreDetails = e.target.moreDetails.value;

      const updateForm = {
        name,
        image,
        camp_fees,
        dateTime,
        location,
        services,
        professionals,
        participantCount,
        comprehensiveDetails,
        moreDetails,
      };
      const response = await axiosSecure.patch(
        `/update-camp/${selectedCamp._id}`,
        updateForm
      );

      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${formData.name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });

        setIsModalOpen(false);
        refetch();
      }
    } catch (error) {
      console.error("Error updating camp:", error);
    }
  };

  const deleteCamp = async (camp) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/delete-camp/${camp._id}`);

          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${camp.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } catch (error) {
          console.error("Error deleting camp:", error);
        }
      }
    });
  };

  const columns = [
    {
      name: "Camp Name",
      selector: "name",
    },
    {
      name: "Scheduled Date and Time",
      selector: "dateTime",
    },
    {
      name: "Venue Location",
      selector: "location",
    },
    {
      name: "Specialized Services",
      selector: "services",
    },
    {
      name: "Healthcare Professionals",
      selector: "professionals",
    },
    {
      name: "Target Audience",
      selector: "participantCount",
    },
    {
      name: "Description",
      selector: "comprehensiveDetails",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-600"
            onClick={() => openModal(row)}
          >
            <FaEdit />
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            onClick={() => deleteCamp(row)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Manage Camps</h1>
      {isLoading ? (
        <Lottie
          className="flex justify-center items-center min-h-[70%]"
          animationData={loadingAnimation}
          width={500}
          height={350}
        />
      ) : (
        <DataTable
          columns={columns}
          data={availableCamp}
          pagination
          highlightOnHover
          responsive
        />
      )}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update {selectedCamp.name}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Camp Name"
                value={formData.name}
                defaultValue={selectedCamp.name}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="image"
                placeholder="Image Url"
                value={formData.image}
                defaultValue={selectedCamp.image}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name="camp_fees"
                placeholder="Camp Fees"
                value={formData.camp_fees}
                defaultValue={selectedCamp.fees}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="dateTime"
                placeholder="Scheduled Date and Time"
                value={formData.dateTime}
                defaultValue={selectedCamp.dateTime}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="location"
                placeholder="Venue Location"
                value={formData.location}
                defaultValue={selectedCamp.location}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="services"
                placeholder="Specialized Services Provided"
                value={formData.services}
                defaultValue={selectedCamp.services}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="professionals"
                placeholder="Healthcare Professionals in Attendance"
                value={formData.professionals}
                defaultValue={selectedCamp.professionals}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="audience"
                placeholder="audience"
                value={formData.audience}
                defaultValue={selectedCamp.audience}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="participantCount"
                placeholder="Target Audience"
                value={formData.participantCount}
                defaultValue={selectedCamp.participantCount}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <textarea
                type="text"
                name="comprehensiveDetails"
                placeholder="Comprehensive Description"
                value={formData.comprehensiveDetails}
                defaultValue={selectedCamp.comprehensiveDetails}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <textarea
                type="text"
                name="moreDetails"
                placeholder="moreDetails"
                value={formData.moreDetails}
                defaultValue={selectedCamp.moreDetails}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCamps;
