from flask import Flask, request, jsonify
from flask_cors import CORS
import os
app = Flask(__name__)
CORS(app)

# Full mattress recommendation dataset
data = [
    ["Active", "Side", "None", "Hot", "Medium-Firm Cooling Foam"],
    ["Active", "Side", "None", "Cold", "Cloud Luxe Hybrid"],
    ["Active", "Side", "None", "Humid", "Cloud Luxe Hybrid"],
    ["Active", "Side", "None", "Dry", "Bamboo Infused Latex"],
    ["Active", "Side", "Lower", "Hot", "Soft Memory Foam"],
    ["Active", "Side", "Lower", "Cold", "Supportive Foam with Gel"],
    ["Active", "Side", "Lower", "Humid", "Adaptive Hybrid"],
    ["Active", "Side", "Lower", "Dry", "Cooling Latex"],
    ["Active", "Side", "Chronic", "Hot", "Orthopedic Gel Mattress"],
    ["Active", "Side", "Chronic", "Cold", "Posturepedic Support Foam"],
    ["Active", "Side", "Chronic", "Humid", "Antimicrobial Foam"],
    ["Active", "Side", "Chronic", "Dry", "Memory Foam with Airflow"],
    ["Sedentary", "Back", "None", "Hot", "Soft Cooling Gel Mattress"],
    ["Sedentary", "Back", "None", "Cold", "Soft Memory Foam"],
    ["Sedentary", "Back", "None", "Humid", "Eco-Friendly Latex"],
    ["Sedentary", "Back", "None", "Dry", "Natural Fiber Foam"],
    ["Sedentary", "Back", "Lower", "Hot", "Memory Foam with Lumbar Support"],
    ["Sedentary", "Back", "Lower", "Cold", "Ergonomic Foam"],
    ["Sedentary", "Back", "Lower", "Humid", "Antibacterial Hybrid"],
    ["Sedentary", "Back", "Lower", "Dry", "Therapeutic Latex"],
    ["Sedentary", "Back", "Chronic", "Hot", "Posture Correction Mattress"],
    ["Sedentary", "Back", "Chronic", "Cold", "Orthopedic Spring Foam"],
    ["Sedentary", "Back", "Chronic", "Humid", "Chronic Back Relief Gel"],
    ["Sedentary", "Back", "Chronic", "Dry", "Advanced Orthopedic Mattress"],
    ["Athlete", "Stomach", "None", "Hot", "Athletic Performance Gel Foam"],
    ["Athlete", "Stomach", "None", "Cold", "Firm Memory Foam"],
    ["Athlete", "Stomach", "None", "Humid", "Ventilated Latex Foam"],
    ["Athlete", "Stomach", "None", "Dry", "Moisture-Wicking Hybrid"],
    ["Athlete", "Stomach", "Lower", "Hot", "Cooling Sport Mattress"],
    ["Athlete", "Stomach", "Lower", "Cold", "Muscle Recovery Foam"],
    ["Athlete", "Stomach", "Lower", "Humid", "Flexible Support Hybrid"],
    ["Athlete", "Stomach", "Lower", "Dry", "Pressure Relief Foam"],
    ["Athlete", "Stomach", "Chronic", "Hot", "Hybrid Mattress with AirFlow"],
    ["Athlete", "Stomach", "Chronic", "Cold", "Performance Orthopedic Foam"],
    ["Athlete", "Stomach", "Chronic", "Humid", "Athlete Recovery Hybrid"],
    ["Athlete", "Stomach", "Chronic", "Dry", "Cooling Gel Mattress"],
    ["Combo", "Back", "None", "Hot", "All-Position Gel Foam"],
    ["Combo", "Back", "None", "Cold", "Latex Comfort Blend"],
    ["Combo", "Back", "None", "Humid", "Bamboo Cool Mattress"],
    ["Combo", "Back", "None", "Dry", "Balanced Memory Foam"],
    ["Combo", "Back", "Lower", "Hot", "Multi-Layer Support Mattress"],
    ["Combo", "Back", "Lower", "Cold", "Orthopedic Supportive Latex"],
    ["Combo", "Back", "Lower", "Humid", "Humidity Control Foam"],
    ["Combo", "Back", "Lower", "Dry", "Dry Climate Memory Foam"],
    ["Combo", "Back", "Chronic", "Hot", "Firm Latex"],
    ["Combo", "Back", "Chronic", "Cold", "Spine Alignment Hybrid"],
    ["Combo", "Back", "Chronic", "Humid", "Antibacterial Foam Hybrid"],
    ["Combo", "Back", "Chronic", "Dry", "Moisture-Wicking Latex"]
]

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        user_input = request.json
        for row in data:
            if (
                row[0] == user_input["lifestyle"] and
                row[1] == user_input["sleep_style"] and
                row[2] == user_input["back_pain"] and
                row[3] == user_input["climate"]
            ):
                return jsonify({"match": row[4]})
        return jsonify({"match": "Standard Support Foam"})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))

