import React from 'react';
import { FiFilter, FiSearch } from "react-icons/fi";

import { FiArrowDown } from "react-icons/fi";

import { FiChevronDown } from "react-icons/fi";

interface VideoListHeaderProps {
    title: string; // Define the type for the title prop
}

const VideoListHeader: React.FC<VideoListHeaderProps> = ({ title }) => {
    return (
      <div className="w-[80%] px-4 flex items-center justify-between py-4">
        {/* Title */}
        <h1 className="text-xl font-bold">{title}</h1>
  
        {/* Search Input */}
        <div className="flex items-center bg-gray-100 rounded-full px-6 py-3 shadow-sm mx-4">
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
            <FiChevronDown className="w-4 h-4 ml        -1 text-gray-400" />
          </button>
        </div>
      </div>
    );
  }
  
  export default VideoListHeader;           