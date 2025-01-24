
import Cards from '../Cards'
import Navbar from '../overview/navbar'
import Header from '@/Reusable/Header'
import { data as originalData } from "../../data";
import Tab from '@/Reusable/tab';


const VideoManagment = () => {
  const limitedData = originalData.slice(0, 4);
  return (
    <div>
      <Navbar></Navbar>
     <div>
      <div className='w-[70%]'>
      <div>
   <Header title='Video List'></Header>
      </div>
      <div className='p-5'>
        <Cards data={limitedData}></Cards>
      </div>

      <div className='px-6'>
        <Tab tabs={[{label:'Posts'}, {label:'Advertisements'}]}></Tab>
      </div>
      </div>
     </div>
     
    </div>
  )
}

export default VideoManagment
