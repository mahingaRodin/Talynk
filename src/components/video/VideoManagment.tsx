import Cards from '../Cards'
import Navbar from '../overview/navbar'
import Header from '@/Reusable/Header'
import { data as originalData } from "../../data";
import Tab from '@/Reusable/tab';
import Videos from '../overview/Videos'
import Trending from '../overview/Trending';
import SingleVideo from './singleVid'
import video from '../../assets/video.mp4';
import thumb from '../../assets/thumb1.jpg'
import Sidebar from '../overview/sidebar';
import Pending from '@/Reusable/pending';
import { Upload } from 'lucide-react';

const VideoManagment = () => {
  const limitedData = originalData.slice(0, 5);
  return (
    <div>
      <Navbar></Navbar>
     <div className='flex justify-between px-4'>
      <div className=''>
      <div>
   <Header title='Video Lists'></Header>
      </div>
      <div className='p-5'>
        <Cards data={limitedData}></Cards>
      </div>

      <div className='px-6'>
        <Tab tabs={[{label:'Posts'}, {label:'Advertisements'}]}></Tab>
      </div>
      <div>
        <div>
          <Pending></Pending>
        </div>
      </div>
      <div>
      <Videos />
      </div>
      <div>
        <Trending></Trending>
      </div>
      </div>
      <div className='flex flex-col gap-6 pt-3'>
        <div className=' '>
          <SingleVideo
          videoSrc={video}
          thumbnailSrc={thumb}
          >
          </SingleVideo>
          <div className='pt-2'>
          <button className="flex items-center bg-blue text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600">
      <Upload className="h-5 w-5 mr-2" /> {/* Use the Lucide Upload icon */}
      upload an ad
    </button>
          </div>
          
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default VideoManagment
