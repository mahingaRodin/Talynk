import React, { useState } from "react";
import Cards from "../Cards";
import Navbar from "../overview/navbar";
import { data as originalData } from "../../data";

const UserManagment = () => {
  const [activeTab, setActiveTab] = useState("Tab1"); // State to track the active tab

  // Take the first 4 cards from the original data
  const limitedData = originalData.slice(0, 4);

  // Modify specific cards based on their `id`
  const modifiedData = limitedData.map((item) => {
    if (item.id === 1) {
      return { ...item, text: "Users", count: '5.4K'};
    }
    if (item.id === 2) {
      return { ...item, text: "Posts", count: 789 };
    }
    if (item.id === 3) {
      return { ...item, text: "Deleted", count: 32 };
    }
    if (item.id === 4) {
      return { ...item, text: "Freezed", count: 40 };
    }
    return item; // Leave other cards unchanged
  });

  return (
    <div>
      <Navbar />
      <div className="w-[70%] p-4">
        <Cards data={modifiedData} />
        <div className="bg-gray-100 p-2  rounded-full mt-4 w-[78%]">
          <div className="flex justify-between w-full">
            {/* Tabs */}
            <button
              onClick={() => setActiveTab("Tab1")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeTab === "Tab1" ? "bg-white text-black shadow-sm w-full" : "text-gray-600 w-full"
              }`}
            >
              Active Accounts
            </button>
            <div className="border-r-2 border-gray-400 mx-2"></div> {/* Small line between tabs */}
            <button
              onClick={() => setActiveTab("Tab2")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeTab === "Tab2" ? "bg-white text-black shadow-sm w-full" : "text-gray-600 w-full"
              }`}
            >
             Freezed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagment;
