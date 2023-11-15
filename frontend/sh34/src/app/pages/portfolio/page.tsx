import Image from 'next/image';
import { Navbar } from '../../components/Navbar/navbar';
import Alogo from "./../../images/Alogo.png"
import UKflag from "./../../images/UKflag.png"


export default function Portfolio() {
    return (
      <div className="text-black">
        <Navbar />
        <hr className="h-0.5 border-none bg-RES"></hr>
        <Body />
      </div>
    );
}

  
function Body() {
    return (
      <div className="bg-white"> {/*bg-orange-200 could be quite nice */} 
        <h1 className="text-4xl text-RES_ORANGE font-bold p-6">Home</h1>
        <Recents />
      </div>
    );
}


function Recents(){
    return(
    <div>
       <span className='text-2xl text-RES_ORANGE font-bold ml-12'>Recent <span className='text-black'>COMAPNY</span> Templates</span> {/* TOTO: Replace Hardcoded COMAPNY with actualy Company Name */}
        <RecentElements />
      </div>
    );
  }
  
function RecentElements(){
    return(
      <div className="justify-center align-middle">
        <div className="flex p-2 justify-between mx-20">
          <RecentElementPortfolio />
          <RecentElementPortfolio />
          <RecentElementPortfolio />
          <RecentElementPortfolio />
          <RecentElementPortfolio />
        </div>  
      </div>
    );
}

  
function RecentElementPortfolio (){
  return(
    <div className='container rounded-xl border-4 border-black w-44 min-w-[150px] bg-slate-200 p-1.5'> {/* background as the image on the wireframe */}
          <div className="grid grid-flow-col pb-1">
            <div className='relative'>
                <Image src={UKflag} alt="test" className="w-10 h-6 self-center object-cover rounded"/>
            </div>
            <div className='text-center'>
                <h1 className='text-sm whitespace-nowrap overflow-hidden'>United Kingdom</h1> {/* TODO: Country is Hard Coded Currently. Will Need to be Changed */}
            </div>
          </div>

          <hr className="h-0.5 border-none bg-[#454545]"></hr>

          <div className='m-1'>
            <div className='text-left'>
              <h1 className='text-center font-semibold text-xl'>Asset Name</h1>
            </div>

            <div className="text-sm">
                <div>
                    <p className="font-medium">Last Modified</p>
                    <p>15/02/2023</p>
                </div>
                <div>
                    <p className="font-medium">Creation Date</p>
                    <p>15/02/2023</p>
                </div>
            </div>
          </div>
        </div>
  )
}

