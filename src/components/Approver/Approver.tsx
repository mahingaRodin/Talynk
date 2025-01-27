import Header from "@/Reusable/Header"
import Navbar from "../overview/navbar"
import Cards from "../Cards"
import { data as originalData } from "../../data"
import Sidebar from "../overview/sidebar"
import Tab from "@/Reusable/tab"
import Page from "@/app/payments/page"
import gabin from '../../assets/gabin.png'

const Approver = () => {
  const limitedData = originalData.slice(0, 4);
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-between px-8'>
        <div className=''>
          <div>
            <Header title='Approvers'></Header>
          </div>
          <div className='p-5'>
            <Cards extraStyles="gap-7" data={limitedData}></Cards>
          </div>
          <div>
          <Tab tabs={[{label:'Posts'}, {label:'Advertisements'}]}></Tab>
          </div>
          <div>
            <Header title='Approvers List'></Header>
          </div>
          <div className="pl-3">
            <Page></Page>
          </div>
        </div>
        <div>
          <div>
            
          </div>
          
          <div className="w-[130px] h-[130px] mx-auto  rounded-full overflow-hidden border-2 border-blue">
            <img src={gabin} alt="Description" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center">
            <h1 className="font-bold text-lg">Lau_lanez 
               <span className="text-[14px] text-grey ml-5">Musician</span></h1>
              
           
          </div>
          
          
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  )
}

export default Approver
