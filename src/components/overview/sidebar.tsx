import { useState } from "react";
import { IoChevronDown, IoChevronForward, IoExitOutline, IoPerson, IoSearch } from "react-icons/io5";
import lanez from '../../assets/lanez.jpg'
import userData from '../../userData'
import CustomButton from "./customButton";

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
  const handleSelect = (option:string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="pb-4">
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
        <div className="z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
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

      <div className="flex mt-5 items-center justify-between w-full max-w-lg p-4 border border-kyan rounded-xl bg-lightGrey">
      {/* Left Section */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 w-[180px] bg-black1 text-white rounded-[30px] px-2 py-1">
          <img src={lanez} alt="Profile" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-semibold">{userData.name}</span>
        </div>
        <div className="mt-4 space-y-2">
          {/* Phone Number Section */}
          <div className="flex items-center w-[140px] justify-center border-2 border-kyan bg-lightGrey bg-blue-100 text-blue-500 font-medium rounded-full py-1">
            <p className="text-blue text-[13px]">{userData.phone}</p>
          </div>

          {/* Email Section */}
          <div className="flex items-center w-[220px] justify-center border-2 border-kyan bg-lightGrey bg-blue-100 text-blue-500 font-medium rounded-full px-6 py-1">
            <p className="text-blue text-[13px]">{userData.email}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-32 w-[1px] bg-kyan mx-2"></div>

      {/* Right Section */}
      <div className="grid grid-cols-1 gap-4 text-center">
        {userData.stats.map((stat, index) => (
          <div key={index} className="gap-2 flex">
            <div className="flex items-center justify-center w-8 border-2 border-kyan bg-lightGrey h-8 bg-blue-100 text-blue-500 font-bold rounded-lg">
              <p className="text-lg">{stat.count}</p>
            </div>
            <p className="text-gray-600 text-sm relative top-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-row gap-4 mt-4 w-full max-w-lg">
  
  <CustomButton
    text="View Account"
    bgColor="#006FFD"
    textColor="#fff"
    border=""
    extraStyles={{ width: "100%",height:'48px', fontWeight: 200, borderRadius:10}}
  />

  
  <CustomButton
    text="Freeze"
    bgColor="#FF3B30"
    textColor="#fff"
    border=""
    extraStyles={{ width: "100%", fontWeight: 200, borderRadius:10 }}
  />
</div>
<div className="mt-8 w-full max-w-lg">
 
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold">Notifications</h2>
    <a href="#" className="text-blue text-sm font-medium hover:font-bold">
      View All
    </a>
  </div>

  {/* Notification Items */}
  <div className="space-y-4">
  {Array(4)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="flex items-center justify-between p-3 bg-white rounded-md"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-kyan rounded-full flex items-center justify-center">
            {/* Replaced img with IoPerson icon and styled it to be blue */}
            <IoPerson className="w-6 h-6 text-blue" />
          </div>
          <span className="text-sm font-medium text-gray-800">Page Title</span>
        </div>
        <div>
          <IoChevronForward size={20} className="text-blue" />
        </div>
      </div>
    ))}
</div>
</div>

<div className="mt-8 w-full max-w-md mx-auto">
  {/* Input Field */}
  <input
    type="text"
    placeholder="Enter message to send"
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none  mb-4"
  />

  {/* Broadcast Button */}
  <CustomButton
    text="Broadcast a message"
    bgColor="#006FFD"
    textColor="white"
    extraStyles={{
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
     
      textAlign: "center",
    }}
  />
</div>
<div className="flex justify-center mt-6">
    <button className="w-14 h-14 bg-blue rounded-full flex items-center justify-center">
      <IoExitOutline className="w-6 h-6 text-white" />
    </button>
  </div>





    </div>
  );
};

export default DropdownFilter;
