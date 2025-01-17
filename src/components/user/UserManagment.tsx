import  { useState } from "react";
import Cards from "../Cards";
import Navbar from "../overview/navbar";
import { FiSearch, FiFilter, FiChevronDown, FiArrowDown } from "react-icons/fi"
import { data as originalData } from "../../data";
import Table from '../table'

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
        <div className="bg-gray-100 p-1.5  rounded-full mt-4 w-[78%]">
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
            <div className="border-r-2 border-gray-300 mx-2"></div> {/* Small line between tabs */}
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
        <div className="w-[75%] px-4 flex items-center justify-between py-4">
  {/* Title */}
  <h1 className="text-xl font-bold">Accounts List</h1>

  {/* Search Input */}
  <div className="flex items-center bg-gray-100 rounded-full px-6 py-3 shadow-sm  mx-4">
    <FiSearch className="w-5 h-5 text-gray-400" />
    <input type="text" placeholder="Search" className="bg-transparent outline-none pl-4 text-sm text-gray-700 w-full" />
  </div>

  {/* Filter and Sort Buttons */}
  <div className="flex items-center space-x-3">
    <button className="flex items-center px-3 py-2 border rounded-full text-gray-700 border-gray-300 hover:bg-gray-100">
      <FiFilter className="w-4 h-4 mr-2" />
      Filter
      <FiChevronDown className="w-4 h-4 ml-1 text-gray-400" />
    </button>
    <button className="flex items-center px-3 py-2 border rounded-full text-gray-700 border-gray-300 hover:bg-gray-100">
      <FiArrowDown className="w-4 h-4 mr-2" />
      Sort
      <FiChevronDown className="w-4 h-4 ml-1 text-gray-400" />
    </button>
  </div>
</div>          



      </div>
      <div className="p-4 mx-3 w-[70%]">
        <Table></Table>
      </div>
    </div>
  );
};

export default UserManagment;
