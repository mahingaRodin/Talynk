import React, { useState } from 'react';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const navItems = [
    'Overview',
    'User Management',
    'Video Management',
    'Approvers'
  ];

  return (
    <nav className="bg-gray-100 p-2 rounded-full max-w-fit mx-auto">
      <div className="flex items-center">
        {navItems.map((item, index) => (
          <React.Fragment key={item}>
            <button
              onClick={() => setActiveTab(item)}
              className={`px-6 py-2 rounded-full transition-all duration-200 text-sm ${
                activeTab === item
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {item}
            </button>
            {index < navItems.length - 1 && (
              <div className="h-6 w-px bg-gray-300 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;