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
      <div className='flex justify-center '>
        <div className=''>
          <SingleVideo
          videoSrc={video}
          thumbnailSrc={thumb}
          >
          </SingleVideo>
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
