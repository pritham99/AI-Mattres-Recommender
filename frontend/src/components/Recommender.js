import React, { useState } from "react";
import "./Recommender.css";

function Recommender() {
  const [lifestyle, setLifestyle] = useState("");
  const [sleepStyle, setSleepStyle] = useState("");
  const [backPain, setBackPain] = useState("");
  const [climate, setClimate] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const username = localStorage.getItem("username") || "Guest";

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lifestyle, sleep_style: sleepStyle, back_pain: backPain, climate })
      });
      const data = await response.json();
      setRecommendation(data.match);
    } catch (error) {
      setRecommendation("Error fetching recommendation.");
    }
  };

  return (
    <div className="recommender-container">
      <h1>🌙 AI Mattress Recommender</h1>
      <p className="greeting">Hi <strong>{username}</strong>, here is your mattress match:</p>

      <div className="form">
        <select onChange={e => setLifestyle(e.target.value)} defaultValue="">
          <option value="" disabled>Lifestyle</option>
          <option value="Active">Active</option>
          <option value="Sedentary">Sedentary</option>
          <option value="Athlete">Athlete</option>
          <option value="Combo">Combo</option>
        </select>

        <select onChange={e => setSleepStyle(e.target.value)} defaultValue="">
          <option value="" disabled>Sleep Style</option>
          <option value="Back">Back</option>
          <option value="Side">Side</option>
          <option value="Stomach">Stomach</option>
        </select>

        <select onChange={e => setBackPain(e.target.value)} defaultValue="">
          <option value="" disabled>Back Pain</option>
          <option value="None">None</option>
          <option value="Lower">Lower</option>
          <option value="Chronic">Chronic</option>
        </select>

        <select onChange={e => setClimate(e.target.value)} defaultValue="">
          <option value="" disabled>Climate</option>
          <option value="Hot">Hot</option>
          <option value="Cold">Cold</option>
          <option value="Humid">Humid</option>
          <option value="Dry">Dry</option>
        </select>

        <button onClick={handleSubmit}>🔍 Show My Mattress Match</button>
      </div>

      <div className="result">
        <h2>🛏️ Recommended Mattress:</h2>
        <p>{recommendation}</p>
      </div>
    </div>
  );
}

export default Recommender;
