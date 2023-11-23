import Image from 'next/image';
import { Navbar } from '../../components/navbar';
import Alogo from "./../../images/Alogo.png"
import UKflag from "./../../images/UKflag.png"
import { RecentElement } from '../../components/recentelement';


export default function Portfolio() {
    return (
      <div className="text-black min-w-[1200px] h-screen">
        <div className='bg-white'>
            <Navbar />
            <Body />
        </div>
      </div>
    );
} 

  
function Body() {
    return (
      <div className="bg-white mx-10">
        <Header />
        <div className='mx-5'>
            <RecentTemplateList />
            <Assets />
        </div>
      </div>
    );
}

function Header(){
    return(
        <div className='grid grid-cols-2 place-content-center'>
            <h1 className="text-4xl text-RES_ORANGE font-bold my-7">Asset Portfolio</h1>
            <div className='justify-self-end self-center grid grid-cols-2'>
                <Image className="w-40" src={Alogo} alt="TestLogo"/>
                <span className='font-bold text-4xl self-center grid'> COMPANY </span>
            </div>
        </div>
    );
}

function RecentTemplateList(){
    return(
    <div className=''>
        <div className='flex my-3'>
            <span className='whitespace-nowrap w-fit mr-5 text-2xl text-RES_ORANGE font-bold pr-0'>Recent <span className='text-black'>COMPANY</span> Templates</span>
            <hr className='flex-grow h-1 basis-3/4 m-auto'></hr>
        </div>
        <RecentElements />
    </div>
    );
  }
  
function RecentElements(){
    return(
      <div className="justify-center align-middle flex">
        <div className="flex flex-nowrap gap-y-2 gap-x-2 2xl:gap-x-[75px] xl:gap-x-5 p-2 mx-20">
          <RecentElement />
          <RecentElement />
          <RecentElement />
          <RecentElement />
          <RecentElement />
          <RecentElement />
        </div>  
      </div>
    );
}



function Assets(){
    return(
      <div className='my-10'>
        <div className='flex my-3'>
            <h1 className='w-fit mr-5 text-2xl text-RES_ORANGE font-bold'>All Companies</h1>
            <hr className='flex-grow h-1 m-auto'></hr>
        </div>
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
        <div className='grid grid-cols-7 p-4'>

          <div className='col-start-1'>
            <h2 className="text-lg font-bold">Type</h2>
          </div>

          <div className='col-start-2'>
            <h2 className='text-lg font-bold'>Asset Name</h2>
          </div>

          <div className='col-start-3'>
            <h2 className='text-lg font-bold'>Last Modified</h2>
          </div>

          <div className='col-start-4'>
            <h2 className='text-lg font-bold'>Creation Date</h2>
          </div>

        </div>
        <hr className='bg-slate-900'></hr>
      </div>
    );
  }


  function AssetElement(){

    return(
      <div>
        <div className='grid grid-cols-7 p-4 items-center auto-rows-[40px]'>

          <div className='relative align-baseline col-span-1'> 
            <h1 className='text-lg '>ICON</h1>
          </div>  

          <div className="col-span-1">
            <h2 className='text-lg'>WindFarm1</h2>
          </div>

          <div className="col-span-1">
              <h2 className='text-lg'>15/10/23</h2>
          </div>

          <div className="col-span-1">
              <h2 className='text-lg'>15/10/23</h2>
          </div>

          <div className='col-span-1 col-start-6 px-0.5'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
            <EditButton />
          </div>

          <div className='col-span-1 col-start-7 px-0.5'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
            <ExportButton />
          </div>

        </div>
        <hr className='w-[95%] mx-auto'></hr>
      </div>
  
    );

  }
  
  
  function EditButton(){
    return(
      <div className='text-center w-5/6'>
        <div className="justify-center flex rounded-xl p-2 border-black border-2 relative bg-[#616673]">
          <p className="text-slate-50 basis-10/11">Edit</p>
        </div>
      </div>
    );
  }

  function ExportButton(){
    return(
      <div className='text-center w-5/6'>
        <div className="justify-center flex rounded-xl p-2 border-black border-2 relative bg-[#346DFF]">
          <p className="text-slate-50 basis-10/11">Export</p>
        </div>
      </div>
    );
  }