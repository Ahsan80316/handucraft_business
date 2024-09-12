/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaUser, FaEnvelope, FaPen, FaPaperPlane } from "react-icons/fa";
import { themeContext } from "../../../context/ContextApi";
import useAxiosPublicApi from "../../../Hook/useAxiosPublicApi";
import toast from "react-hot-toast";

function ContactUs() {
  const position = [23.301476488691346, 91.11571197712456];
  const axiosPublic = useAxiosPublicApi();
  const { darkMode } = useContext(themeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const info = {
      name,
      email,
      subject,
      message,
    };
    axiosPublic
      .post("/contact-info", info)
      .then((res) => {
        if (res.data.insertedId) {
          event.target.reset();
          toast.success("We will contact you later.");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Handcraft Business | Contact Us</title>
      </Helmet>

      {/* Contact Form Section */}
      <div
        className={`min-h-screen flex items-center justify-center px-4 py-8 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-blue-200 to-purple-200 text-gray-900"
        }`}
      >
        <div
          className={`w-full max-w-2xl p-8 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-4xl font-semibold mb-6 text-center">
            Get in Touch
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4 flex items-center border-b border-gray-300 focus-within:border-blue-500 transition-colors">
              <FaUser className="mr-3 text-gray-500" />
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className={`w-full py-3 px-4 leading-tight focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="mb-4 flex items-center border-b border-gray-300 focus-within:border-blue-500 transition-colors">
              <FaEnvelope className="mr-3 text-gray-500" />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className={`w-full py-3 px-4 leading-tight focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Subject Input */}
            <div className="mb-4 flex items-center border-b border-gray-300 focus-within:border-blue-500 transition-colors">
              <FaPen className="mr-3 text-gray-500" />
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className={`w-full py-3 px-4 leading-tight focus:outline-none ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                }`}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className={`w-full border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-blue-500 ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                }`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded inline-flex items-center"
              >
                <FaPaperPlane className="mr-2" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section mt-8 mb-4">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%", margin: "0 auto" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Our website's location. Easily customizable.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default ContactUs;
