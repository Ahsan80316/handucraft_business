/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaUser, FaEnvelope, FaPen, FaPaperPlane } from "react-icons/fa";
import Container from "../../../Shared/Conteinar/Conteinar";
import useAxiosPublicApi from "../../../Hook/useAxiosPublicApi";
import toast from "react-hot-toast";

function ContactUs() {
  const position = [23.301476488691346, 91.11571197712456];
  const axiosPublic = useAxiosPublicApi();

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
          toast.success("We will contact you latter");
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
        <title>MediAssist Hub | Contact Us</title>
      </Helmet>
      <Container>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-300">
          <div className="max-w-lg p-8 bg-white rounded-lg shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center border-b border-gray-300">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border-none py-2 px-2 leading-tight focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4 flex items-center border-b border-gray-300">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border-none py-2 px-2 leading-tight focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4 flex items-center border-b border-gray-300">
                <FaPen className="text-gray-400 mr-2" />
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full border-none py-2 px-2 leading-tight focus:outline-none"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border rounded-md py-2 px-3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
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
        <div className="map-section mt-8">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "80%", margin: "0 auto" }}
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
      </Container>
    </>
  );
}

export default ContactUs;
