import Image from 'next/image';
import { Navbar } from '../../components/Navbar/navbar';
import Alogo from "./../../images/Alogo.png"
import UKflag from "./../../images/UKflag.png"
import WindFarm from "./../../images/windfarmlogo.png"


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
        <h1 className="text-4xl text-RES_ORANGE font-bold p-6">Asset Portfolio</h1>
        <Recents />
        <Assets />
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
        <div className="flex flex-wrap gap-y-2 p-2 justify-between mx-20">
          <RecentElementPortfolio />
          <RecentElementPortfolio />
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
    <div className='container rounded-xl border-4 border-black w-44 min-w-[150px] bg-slate-200 p-1.5' > {/* background as the image on the wireframe */}
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

function Assets(){
    return(
      <div className='m-10'>
        <br></br><br></br>
        <h1 className='text-2xl text-RES_ORANGE font-bold ml-12'>All Companies</h1>
            <AssetsHeader />
            <AssetElement />
            <AssetElement />
            <AssetElement />
            <AssetElement />
      </div>
    );
  }

  function AssetsHeader(){
    return(
      <div className=''>
        <div className='grid grid-cols-8 p-4'>
          <div className='col-start-2 col-end-3'>
            <h2 className="text-lg">Company Name</h2>
          </div>
          <div className='col-start-3 col-end-4'>
            <h2 className='text-lg'>No. of Assets</h2>
          </div>
        </div>
        <hr className="h-1 bg-RES_ORANGE boder-none "></hr>
      </div>
    );
  }
  
  function AssetElement(){
    return(
      <div>
        <div className='grid grid-cols-8 p-4 items-center'>
          <div className='relative align-baseline'> 
            <Image src={Alogo} alt="test" fill={true} className="rounded object-contain p-0"/>
            <h1 className='text-lg '>LOGO</h1>
          </div>  
          <div className="">
            <h2 className=''>Company</h2>
          </div>
          <div>
              <h2>NUMBER</h2>
            </div>
          <div className='col-start-7 col-span-2 px-10'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
            <GeneralButton />
          </div>
        </div>
        <hr className="h-0.5 bg-GRIDLINES border-none mr-4 ml-4"></hr>
      </div>
  
    );
  }
  
  function GeneralButton(){
    return(
      <div className='text-center'>
        <div className="flex rounded-xl p-2 border-black border-2 relative bg-test">
          {/* <p className='text-white'>little img</p> */}
          <div className='relative p-0 basis-1/3'> 
            <Image src={UKflag} alt="test" fill={true} className="self-center rounded object-contain p-0"/>
          </div>
          <p className="text-black basis-10/11">View Portfolio</p>
        </div>
      </div>
    );
  }