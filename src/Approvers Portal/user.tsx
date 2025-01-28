import Tab from '../Reusable/tab'
import BlackCard from '../components/user/BlackCard'
import Cards from "../components/Cards";
import Navbar from "./Navbar";
import { FiSearch, FiFilter, FiChevronDown, FiArrowDown } from "react-icons/fi"
import { data as originalData } from "../data";

import Page from '../app/payments/page'

const User = () => {
  // State to track the active tab

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
      <div className="flex justify-between px-5">
      <div className="">
        <Cards data={modifiedData} />

        <div>
          <Tab tabs={[{label: "Active Account"}, {label:'Freezed'}]}></Tab>
        </div>
       


        <div className="px-4 flex items-center justify-between py-4">
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
<div className="mx-2">
       <Page></Page>
      </div>       



      </div>
      <div className="">
        <BlackCard></BlackCard>
      </div>
      </div>
    
    </div>
  );
};

export default User;
