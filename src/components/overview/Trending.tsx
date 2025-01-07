import { FiChevronUp } from "react-icons/fi"
import { FiChevronDown } from 'react-icons/fi'
import Videos from '../overview/Videos'
import { useState } from "react";


const Trending = () => {
    const [filter, setFilter] = useState('Today'); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
      };
    
      const handleFilterChange = (option) => {
        setFilter(option);
        setIsDropdownOpen(false);
      };
  
  return (
    <div>

<div className="flex items-center justify-between pr-16 pl-1  relative">
          <h1 className="text-grey font-bold text-xl">Trending Videos</h1>

          {/* Filter Bar with increased z-index */}
          <div className="relative z-50"> {/* Added high z-index here */}
            <div
              className="flex items-center gap-2 p-2 rounded-xl border-2 border-grey cursor-pointer bg-white"
              onClick={toggleDropdown}
            >
              <span className="text-gray-600 font-medium">Filter by: {filter}</span>
              {isDropdownOpen ? (
                <FiChevronUp size={20} className="text-blue-500" />
              ) : (
                <FiChevronDown size={20} className="text-blue-500" />
              )}
            </div>

            {/* Dropdown Menu with increased z-index */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-md shadow-lg z-[9999]">
                {['Today', 'Yesterday', 'Recent'].map((option) => (
                  <div
                    key={option}
                    className={`px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer ${
                      filter === option ? 'font-bold text-blue-500' : ''
                    }`}
                    onClick={() => handleFilterChange(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
            <Videos></Videos>
        </div>
      
    </div>
  )
}

export default Trending
