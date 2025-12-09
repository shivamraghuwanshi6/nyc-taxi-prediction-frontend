import React, { useState } from 'react';
import { Car, MapPin, Clock, DollarSign, Sparkles, TrendingUp } from 'lucide-react';

export default function TaxiFareApp() {
  const [pickupId, setPickupId] = useState('');
  const [dropoffId, setDropoffId] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!pickupId || !dropoffId) {
      setError('Please enter both pickup and dropoff IDs');
      return;
    }

    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          PULocationID: parseInt(pickupId),
          DOLocationID: parseInt(dropoffId)
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }

      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      setError(err.message || 'Error connecting to backend');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPickupId('');
    setDropoffId('');
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Header with animated gradient */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-5 rounded-full shadow-2xl animate-pulse">
              <Car className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
            🚕 NYC Taxi Fare Predictor
          </h1>
          <p className="text-xl text-white font-medium drop-shadow-md flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Estimate your trip duration using AI/ML predictions
            <Sparkles className="w-5 h-5" />
          </p>
        </div>

        {/* Main Card with vibrant colors */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-300">
          <div className="space-y-6">
            {/* Pickup Location */}
            <div className="relative">
              <label className="flex items-center text-sm font-bold text-purple-700 mb-2">
                <div className="bg-green-500 p-2 rounded-lg mr-2">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                Pickup Location ID
              </label>
              <input
                type="number"
                value={pickupId}
                onChange={(e) => setPickupId(e.target.value)}
                placeholder="e.g., 230"
                className="w-full px-5 py-4 border-3 border-green-400 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-200 focus:outline-none transition-all text-lg font-semibold"
              />
              <p className="text-xs text-green-700 mt-2 font-semibold">📍 Enter NYC taxi zone ID (1-263)</p>
            </div>

            {/* Dropoff Location */}
            <div className="relative">
              <label className="flex items-center text-sm font-bold text-purple-700 mb-2">
                <div className="bg-red-500 p-2 rounded-lg mr-2">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                Dropoff Location ID
              </label>
              <input
                type="number"
                value={dropoffId}
                onChange={(e) => setDropoffId(e.target.value)}
                placeholder="e.g., 100"
                className="w-full px-5 py-4 border-3 border-red-400 rounded-xl focus:border-red-600 focus:ring-4 focus:ring-red-200 focus:outline-none transition-all text-lg font-semibold"
              />
              <p className="text-xs text-red-700 mt-2 font-semibold">🎯 Enter NYC taxi zone ID (1-263)</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center text-lg"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3" />
                    Predicting...
                  </>
                ) : (
                  <>
                    <Clock className="w-6 h-6 mr-2" />
                    Predict Duration
                  </>
                )}
              </button>
              
              {(prediction || error) && (
                <button
                  onClick={handleReset}
                  className="px-8 py-4 border-3 border-orange-400 hover:border-orange-600 hover:bg-orange-50 text-orange-700 font-bold rounded-xl transition-all shadow-lg transform hover:scale-105"
                >
                  🔄 Reset
                </button>
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-5 bg-gradient-to-r from-red-100 to-pink-100 border-3 border-red-400 rounded-2xl shadow-lg">
              <p className="text-red-900 font-bold text-lg">❌ {error}</p>
              <p className="text-red-700 text-sm mt-2 font-semibold">
                💡 Make sure your backend is running at http://localhost:8000
              </p>
            </div>
          )}

          {/* Prediction Result with vibrant colors */}
          {prediction && (
            <div className="mt-6 p-6 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 border-4 border-emerald-400 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-2xl font-bold text-emerald-900 flex items-center gap-2">
                  <TrendingUp className="w-7 h-7 text-emerald-600" />
                  Prediction Results
                </h3>
                <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
                  {prediction.model_version}
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-300">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-bold flex items-center text-lg">
                      <div className="bg-blue-500 p-2 rounded-lg mr-3">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      Estimated Duration
                    </span>
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {prediction.predicted_duration_minutes.toFixed(1)}
                      <span className="text-2xl ml-1">min</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-lg text-white">
                    <p className="text-xs font-bold mb-2 opacity-90">🟢 Pickup Zone</p>
                    <p className="text-3xl font-extrabold">
                      {prediction.pickup_location}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-red-400 to-pink-500 p-4 rounded-2xl shadow-lg text-white">
                    <p className="text-xs font-bold mb-2 opacity-90">🔴 Dropoff Zone</p>
                    <p className="text-3xl font-extrabold">
                      {prediction.dropoff_location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info Card with colors */}
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 border-3 border-blue-300 rounded-2xl p-5 shadow-xl">
          <h4 className="font-bold text-white text-lg mb-3 flex items-center">
            <div className="bg-yellow-400 p-2 rounded-lg mr-2">
              <DollarSign className="w-5 h-5 text-indigo-900" />
            </div>
            How it works
          </h4>
          <ul className="text-sm text-white space-y-2 font-medium">
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">🎯</span>
              Enter pickup and dropoff location IDs (NYC taxi zones)
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">🤖</span>
              ML model predicts trip duration based on historical data
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">⚡</span>
              Backend powered by FastAPI + MLflow + Scikit-learn
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white drop-shadow-lg">
          <p className="text-lg font-bold">🚀 MLOps Project - NYC Taxi Fare Prediction</p>
          <p className="mt-2 font-semibold bg-white bg-opacity-20 rounded-full px-6 py-2 inline-block">
            Backend: FastAPI | Model: Linear Regression | Tracking: MLflow
          </p>
        </div>
      </div>
    </div>
  );
}