import Cards from '../components/Cards'
import Navbar from './Navbar'
import Header from '@/Reusable/Header'
import { data as originalData } from "../data";
import Tab from '@/Reusable/tab';
import Videos from '../components/overview/Videos'

import Pending from '@/Reusable/pending';


const VideoManagment = () => {
  const limitedData = originalData.slice(0,7);
  return (
    <div>
      <Navbar></Navbar>
     <div className='px-9'>
      <div className=''>
      <div>
   <Header title='Video Lists'></Header>
      </div>
      <div className='p-5'>
        <Cards data={limitedData} extraStyles=''></Cards>
      </div>

      <div className='pr-8'>
        <Tab tabs={[{label:'Posts'}, {label:'Advertisements'}]}></Tab>
      </div>
      <div>
        <div className='pr-11'>
          <Pending></Pending>
        </div>
      </div>
      <div>
      <Videos showFourPosts={true} />
      </div>
      <div>
        <Videos showFourPosts={true}></Videos>
      </div>
      </div>
      <div className='flex flex-col gap-6 pt-3'>
       
       
      </div>
     </div>
     
    </div>
  )
}

export default VideoManagment
