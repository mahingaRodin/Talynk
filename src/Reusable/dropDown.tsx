// src/components/DayComponent.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Sun, ChevronDown, Filter } from 'lucide-react';

const DayComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Day');

  // Add a ref to the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-42" ref={dropdownRef}> {/* Adjust width as needed */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full p-2  rounded-2xl border-2 hover:bg-blue-200 focus:outline-none"
      >
        <div className="flex items-center">
          <Filter className="w-4 h-4 text-black mr-2" />
          <span className=" ">{selectedOption}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-700 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100" onClick={() => handleOptionSelect('Day1')}>Day1 </li>
            <li className="px-4 py-2 hover:bg-gray-100" onClick={() => handleOptionSelect('Day2')}>Day2</li>
            <li className="px-4 py-2 hover:bg-gray-100" onClick={() => handleOptionSelect('Day3')}>Day3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DayComponent;