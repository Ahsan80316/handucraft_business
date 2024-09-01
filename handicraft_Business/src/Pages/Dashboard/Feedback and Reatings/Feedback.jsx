import { useState } from "react";
import FeedbackModal from "../Feedback and Reatings/FeedbackModal";

function Feedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1>Please Provide your Valuable Feedback</h1>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Feedback
      </button>
      {isModalOpen && <FeedbackModal onClose={toggleModal} />}
    </div>
  );
}

export default Feedback;
