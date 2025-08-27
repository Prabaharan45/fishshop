import React from "react";

function Home() {
  const homePageStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    backgroundColor: "#1e90ff", // Example background color
  };

  const contentStyle = {
    padding: "20px",
  };

  return (
    <div style={homePageStyle}>
      <div style={contentStyle}>
        <h1>Welcome to Divine Fish Store 🐟</h1>
        <p>Fresh, Exotic & Healthy Fishes Delivered with Love ❤️</p>
      </div>
    </div>
  );
}

export default Home;
