import { useState } from 'react';

interface TabProps {
    tabs: { label: string }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);
  return (
    <div>
        <div className="bg-gray-100 p-1.5  rounded-full mt-4 w-[70%]">
<div className="flex justify-between w-full">
  {/* Tabs */}
  {tabs.map((tab) => (
    <button
      key={tab.label}
      onClick={() => setActiveTab(tab.label)}
      className={`px-4 py-2 rounded-full text-sm ${
        activeTab === tab.label ? "bg-white text-black shadow-sm w-full" : "text-gray-600 w-full"
      }`}
    >
      {tab.label}
    </button>
  ))}
   {/* Small line between tabs */}
</div>
</div>
      
    </div>
  )
}

export default Tab
