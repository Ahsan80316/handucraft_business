import { useState } from "react";

import toast from "react-hot-toast";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const FeedbackModal = ({ onClose }) => {
  const { user } = useAuth();

  console.log("userDataName", user.displayName);
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    campName: "",
    date: "",
    feedback: "",
    details: "",
    rating: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosSecure.post("/reviews", formData).then((res) => {
      if (res.data.insertedId) {
        console.log("info added to the database");
        toast.success("Successfully data inserted!");
      }
    });

    console.log(formData);
    onClose(); // Close modal after submission
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Join </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="campName"
            placeholder="campname"
            value={formData.age}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.age}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />

          <label
            htmlFor="scheduledDateTime"
            className="block text-sm font-medium"
          >
            Scheduled Date and Time
          </label>
          <input
            type="datetime-local"
            id="scheduledDateTime"
            name="date"
            value={formData.date}
            onChange={handleFormChange}
            className="w-full border rounded-md px-3 py-2"
          />

          <textarea
            name="feedback"
            placeholder="Feedback"
            value={formData.emergencyContact}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />
          <textarea
            name="details"
            placeholder="Details"
            value={formData.emergencyContact}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" onClick={onClose} className="btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
