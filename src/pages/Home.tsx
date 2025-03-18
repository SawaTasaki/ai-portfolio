import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-center">
        マイ AI スタック 📸
      </h1>

      <div className="flex gap-6">
        <Link
          to="/set-data"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          編集する
        </Link>
        <Link
          to="/new-tab"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
        >
          確認する
        </Link>
      </div>
    </div>
  );
};

export default Home;
