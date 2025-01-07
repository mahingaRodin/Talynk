import { useState } from 'react';
import Videos from '../overview/Videos'
import Trending from './Trending';
import { data } from '../../data';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 

const Graph = () => {
  const [filter, setFilter] = useState('Current'); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleFilterChange = (option) => {
    setFilter(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex w-full px-4">
      <div className="w-[70%] p-4">
        {/* Wrapper for the data items */}
        <div className="flex flex-wrap gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-2xl border border-blue p-4 bg-white w-[200px]"
            >
              <div className="flex flex-row gap-5">
                <div className="text-4xl font-bold text-red mb-2">{item.count}</div>
                <div className="text-lg font-medium mb-2">{item.text}</div>
              </div>
              <img src={item.image} alt="Graph" className="h-[80px] w-[290px]" />
            </div>
          ))}
        </div>

        {/* Title and Filter Bar */}
        <div className="flex items-center justify-between pr-16 pl-1 mt-4 relative">
          <h1 className="text-grey font-bold text-xl">Pending Videos</h1>

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

        <div className="relative z-0"> {/* Added lower z-index for Videos component */}
          <Videos />
        </div>
        <div>
          <Trending></Trending>
        </div>
      </div>
    </div>
  );
};

export default Graph;