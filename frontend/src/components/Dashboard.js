import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Guest";

  const handleRecommendClick = () => {
    navigate("/recommender");
  };

const mattresses = [
  {
    name: "Hybrid AirFlow",
    desc: "Engineered for breathability and temperature regulation. Combines coils and foam layers for dynamic support, ideal for hot sleepers and all-night comfort."
  },
  {
    name: "Soft Memory Foam",
    desc: "Delivers contouring comfort that hugs your body. Reduces motion transfer and relieves pressure points, perfect for side sleepers seeking a plush feel."
  },
  {
    name: "Latex Firm",
    desc: "Eco-friendly and responsive design with natural latex. Offers firm support and gentle bounce, ideal for back sleepers and those with joint concerns."
  },
  {
    name: "Cloud Luxe Hybrid",
    desc: "Ultimate plush feel with multi-layer memory foam and adaptive springs. Designed for deep pressure relief and a dreamy, cloud-like sleep experience."
  },
  {
    name: "EcoFlex Bamboo",
    desc: "Natural cooling with a bamboo-infused cover. Antibacterial and breathable, offering a soft, eco-conscious sleep surface with excellent ventilation."
  },
  {
    name: "Orthopedic Support",
    desc: "Ergonomic zones target back and lumbar alignment. Reduces pain and improves posture for individuals with chronic discomfort or lower back concerns."
  },
  {
    name: "Plush Gel Top",
    desc: "Luxurious gel-infused top layer enhances softness while drawing heat away. Ideal for those who want a balance of cooling, comfort, and gentle sink."
  }
];


  return (
    <div className="dashboard">
      <h1>🛏️ {username}, let’s find your dream mattress!</h1>
      <div className="mattress-grid">
        {mattresses.map((mattress, index) => (
          <div key={index} className="mattress-card">
            <h2>{mattress.name}</h2>
            <p>{mattress.desc}</p>
          </div>
        ))}
      </div>
      <button onClick={handleRecommendClick}>Confused? Let us help you!</button>
    </div>
  );
}

export default Dashboard;
