import { useState } from 'react';
import Sidebar from './sidebar';
import Videos from '../overview/Videos'
import Trending from './Trending';
 
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 
import Cards from '../Cards';
import {data as originalData} from '../../data.ts'

const Graph = () => {
  const [filter, setFilter] = useState('Current'); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleFilterChange = (option:string) => {
    setFilter(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      
      <div className="w-full md:w-[75%] p-6">
        {/* Wrapper for the data items */}
       <Cards data={originalData}></Cards>

        {/* Title and Filter Bar */}
        <div className="flex flex-row justify-between pt-4">
          <h1 className="text-grey font-bold text-xl">Pending Videos</h1>

          
          <div className=" relative w-[20%] justify-center flex z-20"> 
            <div
              className="flex items-center  gap-2 p-2 rounded-xl border-2 border-grey cursor-pointer bg-white"
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
              <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-md shadow-lg ">
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

      <div className='w-full md:w-[25%]'>
        <Sidebar></Sidebar>

      </div>
    </div>
  );
};

export default Graph;