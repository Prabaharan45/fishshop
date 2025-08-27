import React from "react";
import contactImage from "../Assets/contact.jpg"; // Background image

export default function Contact() {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Contact Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start px-10 py-20 text-center">
        
        {/* Heading at Top Center */}
        <h2 className="text-8xl font-extrabold mb-24">📞 Contact Us</h2>

        {/* Owner */}
        <div className="mb-16">
          <p className="text-8xl font-extrabold">Aquarium Owner:</p>
          <p className="text-white text-5xl font-bold mt-4">ㅤDavid Dsouza</p>
        </div>

        {/* Phone */}
        <div className="mb-16">
          <p className="text-6xl font-extrabold">📱 Call Us</p>
          <a
            href="tel:+919632762833"
            className="text-white text-5xl font-bold mt-4 hover:underline"
          >
            +91-9632762833
          </a>
        </div>

        {/* Email */}
        <div className="mb-16">
          <p className="text-6xl font-extrabold">✉️ Email</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dsouzada@wm.ibm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-5xl font-bold mt-4 hover:underline"
          >
            dsouzada@wm.ibm.com
          </a>
        </div>

        {/* WhatsApp */}
        <div className="mb-16">
          <p className="text-6xl font-extrabold">💬 WhatsApp</p>
          <a
            href="https://wa.me/919632762833"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-4xl font-extrabold px-16 py-8 rounded-3xl border-4 border-green-400 hover:scale-110 transform transition duration-300 mt-4"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Address */}
        <div className="mb-20">
          <p className="text-6xl font-extrabold">📍 Address</p>
          <p className="text-white text-5xl font-bold mt-4 leading-relaxed">
            Post Office Road, <br />
            Rammurthy Nagar, <br />
            Krishnarajapuram, <br />
            Bengaluru, <br />
            Karnataka - 560016.
          </p>
        </div>
        ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ

      </div>
      

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center bg-black/70 py-6 text-2xl font-semibold">
       ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ © {new Date().getFullYear()} David Dsouza | All Rights Reserved
      </footer>
    </div>
  );
}
