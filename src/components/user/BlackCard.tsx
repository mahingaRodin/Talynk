import { userProfile } from './data'; // Adjust the path as necessary

const BlackCard = () => {
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
        </div>
        {/* Content will be added here */}
      </div>
   
  )
}

export default BlackCard
