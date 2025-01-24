import { userProfile } from './data'; // Adjust the path as necessary
import { useState } from 'react';
import CustomButton from '../overview/customButton';
const BlackCard = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const handleTabClick = (tab: string) => {
      setActiveTab(tab);
  };
  return (
    <div className="">
      <div className="bg-black text-white p-4 rounded-[28px] min-h-[50px] w-[95%] ">
        {/* Profile Information */}
        <div className="flex flex-row justify-around mb-4">
          <div className='flex-col flex'>
          <div className="rounded-full w-16 h-16 bg-gray-500 mr-4 flex border-blue border-2 items-center justify-center">
            {/* Placeholder for the profile image */}
            <img src={userProfile.image.lanez} alt="Profile" className="rounded-full w-full h-full object-cover" />
          </div>
          <h2 className="text-lg font-bold pt-1 flex justify-center">{userProfile.name}</h2>
          </div>
        
        
           
     
            <div className=" border-2 border-[#2F3036] p-4 rounded-[12px]">
              <div className="flex space-x-4">
                {/* Updated structure for displaying stats */}
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">{userProfile.posts}</span>
                  <span>Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">{userProfile.subscribers}</span>
                  <span>Subscribers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">{userProfile.views}</span>
                  <span>Views</span>
                </div>
              </div>



            </div>
          </div>
          <div className='flex justify-around'>
            <div className='flex flex-row gap-5'>
              <h1 className='font-bold'>{userProfile.visitsNber}</h1>
              <p className='text-white'>Total Profile Visits</p>
            </div>
            <p>Boost Profile</p>

          </div>
          <div>
          <div className=" pt-9 flex justify-around mb-4">
                <div 
                    className={`cursor-pointer p-2 ${activeTab === 'section1' ? 'border-b-2 border-white' : ''}`} 
                    onClick={() => handleTabClick('section1')}
                >
                    Section 1
                </div>
                <span className='h-5 border-2 border-white relative top-4'></span>
                <div
                    className={`cursor-pointer p-2 ${activeTab === 'pending' ? 'border-b-2 border-white' : ''}`} 
                    onClick={() => handleTabClick('pending')}
                >
                    Pending
                </div>
            </div>

            {/* Content based on active tab */}
            <div className="mt-4">
                {activeTab === 'section1' ? (
                    <div>
                        <div className="flex flex-row flex-wrap gap-3">
                      {Array(12).fill(userProfile.image.lanez).map((image, index) => (
                        <div key={index} className="w-32 h-32 rounded-xl  overflow-hidden">
                          <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                      

                    </div>
                ) : (
                    // <PendingContent />
                    <div className="flex flex-row flex-wrap gap-3">
                      {Array(12).fill(userProfile.thumb.thumb).map((image, index) => (
                        <div key={index} className="w-32 h-32 rounded-xl  overflow-hidden">
                          <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                )}
            </div>
        </div>

          </div>
          <div className='flex flex-row pt-4 justify-around w-[94%]'>
          <CustomButton
            text="Message"
            bgColor="#006FFD"
            textColor="#fff"
            border="#006FFD"
            extraStyles={{ fontWeight: 600, width:'180px'}}
          />
           <CustomButton
            text="Freeze"
            bgColor="#2F3037"
            textColor="#fff"
            border=""
            extraStyles={{ fontWeight: 600, width:'180px' }}
          />
           <CustomButton
            text="Delete"
            bgColor="#2F3037"
            textColor="#fff"
            border=""
            extraStyles={{ fontWeight: 600, width:'180px' }}
          />
            
          </div>
         

          
          
        </div>
        
   
  )
}

export default BlackCard
