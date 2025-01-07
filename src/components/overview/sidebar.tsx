import { useState } from "react";
import { IoChevronDown, IoSearch } from "react-icons/io5";

const DropdownFilter = () => {
  const [selectedOption, setSelectedOption] = useState(""); // To track selected option
  const [isOpen, setIsOpen] = useState(false); // To toggle dropdown menu
  const [searchValue, setSearchValue] = useState(""); // To handle search input

  // Dropdown options
  const options = [
    "Find Post By Traceability ID",
    "Find Post By Author",
    "Find Post By Date",
    "Find Post By Status",
  ];

  // Handle option selection
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full max-w-sm overflow-auto h-full">
      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <span className="text-gray-700">
          {selectedOption || "Find Post By Traceability ID"}
        </span>
        <IoChevronDown className="text-gray-500" size={20} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                option === selectedOption ? "bg-blue-100 font-medium" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {/* Search Bar */}
      <div className="mt-4">
        <div className="relative">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter Traceability-ID"
            className="w-full px-4 py-2 pl-10 text-gray-700 border bg-gray-50 border-gray-200 rounded-md  focus:outline-none"
          />
          <IoSearch
            className="absolute top-2.5 left-3 text-black"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownFilter;
