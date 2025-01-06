import logo from '../../assets/tLogo.png'
import Navigation from './navigation'
const navbar = () => {
  return (
   
        <header className="flex relative bg-white">
            <nav>
                <div className=''>
                    <div className='flex flex-row gap-4'>
                        <img src={logo} alt="" />
                        <h1 className='text-2xl relative top-1'>Tal<span className='text-blue italic'>ynk</span></h1>
                    </div>  
                    <div>

                        <Navigation></Navigation>
                    </div>
                </div>

            </nav>
        </header>
      
    
  )
}

export default navbar
