import Header from "@/Reusable/Header"
import Navbar from "../overview/navbar"
import Cards from "../Cards"
import { data as originalData } from "../../data"
import Sidebar from "../overview/sidebar"

const Approver = () => {
  const limitedData = originalData.slice(0, 4);
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-between px-4'>
        <div className=''>
          <div>
            <Header title='Approvers Lists'></Header>
          </div>
          <div className='p-5'>
            <Cards extraStyles="gap-7" data={limitedData}></Cards>
          </div>
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  )
}

export default Approver
