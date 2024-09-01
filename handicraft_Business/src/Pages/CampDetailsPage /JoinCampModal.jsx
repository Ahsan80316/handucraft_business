import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";

const JoinCampModal = ({ onClose, campDetails }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    gender: "",
    address: "",
    camp_fees: "",
    emergencyContact: "",
    healthInfo: "",
    registered: campDetails.name,
    email: user.email,
    date: campDetails.dateTime,
    location:campDetails.location,
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
    axiosSecure.post("/joinCamp", formData).then((res) => {
      if (res.data.insertedId) {
        console.log("info added to the database");
        toast.success("Successfully data inserted!");
      }
    });

    console.log(formData);
    onClose(); 
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Join {campDetails.name}</h3>
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
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="camp_fees"
            placeholder="Camp Fees"
            value={formData.camp_fees}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />
          <textarea
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleFormChange}
            className="input input-bordered w-full"
          />
          <textarea
            name="healthInfo"
            placeholder="Health Information"
            value={formData.healthInfo}
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

export default JoinCampModal;