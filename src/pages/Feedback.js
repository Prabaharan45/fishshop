import React, { useState } from "react";
import bgImage from "../Assets/Jellyfish.png"; // your background image

export default function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Thank you for your feedback: "${feedback}"`);
    setFeedback("");
  };

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: "4rem",
    paddingBottom: "2rem",
  };

  return (
    <div style={pageStyle}>
      {/* Top Centered Bold Text */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Share Your Feedback
        </h1>
        <p className="text-2xl font-semibold text-white drop-shadow-md">
          Your opinion matters! Let us know how we can improve our fish store.
        </p>
      </div>

      {/* Feedback Card - Rectangle Shape */}
      <div className="w-full max-w-2xl bg-white bg-opacity-90 rounded-2xl shadow-2xl p-12">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <textarea
            className="w-full border border-gray-300 p-6 rounded-2xl mb-6 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300 resize-none text-lg text-center"
            placeholder="Write your feedback..."
            rows={6}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 hover:from-blue-600 hover:to-blue-800"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
