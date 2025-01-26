import Header from "@/Reusable/Header"
import Navbar from "../overview/navbar"
import Cards from "../Cards"
import { data as originalData } from "../../data"

const Approver = () => {
  const limitedData = originalData.slice(0, 4);
  return (
    <div>
      <Navbar></Navbar>
      <div className=''>
        <div className=''>
          <div>
            <Header title='Video Lists'></Header>
          </div>
          <div className='p-5'>
            <Cards extraStyles="gap-7" data={limitedData}></Cards>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approver
