import { useState } from 'react';
import { data } from '../../data';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 

const Graph = () => {
  const [filter, setFilter] = useState('Current'); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility state

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleFilterChange = (option) => {
    setFilter(option); // Update filter
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex w-full px-4">
      <div className="w-[70%] p-4">
        {/* Wrapper for the data items - Flex row layout */}
        <div className="flex flex-wrap gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-2xl border border-blue p-4 bg-white w-[200px]"
            >
              {/* Display the red number and text */}
              <div className="flex flex-row gap-5">
                <div className="text-4xl font-bold text-red mb-2">{item.count}</div>
                <div className="text-lg font-medium mb-2">{item.text}</div>
              </div>

              {/* Display the image dynamically based on item */}
              <img src={item.image} alt="Graph" className="h-[80px] w-[290px]" />
            </div>
          ))}
        </div>

        {/* Title and Filter Bar on the Same Row */}
        <div className="flex items-center justify-between pr-16 pl-1 mt-4 relative">
          {/* Title */}
          <h1 className="text-grey font-bold text-xl">Pending Videos</h1>

          {/* Filter Bar */}
          <div className="relative">
            <div
              className="flex items-center gap-2 p-2 rounded-xl border-2 border-grey cursor-pointer"
              onClick={toggleDropdown}
            >
              {/* Filter Text */}
              <span className="text-gray-600 font-medium">Filter by: {filter}</span>

              {/* Chevron Icon */}
              {isDropdownOpen ? (
                <FiChevronUp size={20} className="text-blue-500" />
              ) : (
                <FiChevronDown size={20} className="text-blue-500" />
              )}
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-md shadow-lg z-10">
                {['Newest', 'Oldest', 'Current'].map((option) => (
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
      </div>
    </div>
  );
};

export default Graph;
