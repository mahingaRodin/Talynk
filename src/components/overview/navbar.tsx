import logo from '../../assets/tLogo.png'
const navbar = () => {
  return (
   
        <header className="flex relative bg-white">
            <nav>
                <div>
                    <div className='flex flex-row'>
                        <img src={logo} alt="" />
                        <h1 className='text-2xl'>Tal<span className='text-blue italic'>ynk</span></h1>
                    </div>
                </div>

            </nav>
        </header>
      
    
  )
}

export default navbar
