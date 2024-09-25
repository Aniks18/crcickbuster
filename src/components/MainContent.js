// src/components/MainContent.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const MainContent = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMatches = async () => {
    try {
      const response = await axios.get(
        "https://api.cricapi.com/v1/currentMatches?apikey=bebf8a18-4945-4469-b429-5b31a3f86031&offset=0"
      );
      setMatches(response.data.data); // Adjust based on your API's response structure
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Live Matches</h1>
      {loading ? (
        <p>Loading...</p>
      ) : matches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {matches.map((match, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold">{match.seriesName}</h2>
              <p className="text-gray-600">Status: {match.status}</p>
              <p className="text-gray-600">Match Type: {match.matchType}</p>
              <p className="text-gray-600">Toss Winner: {match.tossWinner}</p>
              <p className="text-gray-600">Team A: {match.teamA}</p>
              <p className="text-gray-600">Team B: {match.teamB}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No live matches available.</p>
      )}
    </div>
  );
};

export default MainContent;
