import Image from 'next/image';
import { Navbar } from '../../components/navbar';
import Alogo from "./../../images/Alogo.png"
import UKflag from "./../../images/UKflag.png"
import Link from 'next/link';


export default function Portfolio() {
    return (
      <div className="text-black min-w-[1200px] h-screen bg-white">
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
            <Templates />
        </div>
      </div>
    );
}

function Header(){
    return(
        <div className='grid grid-cols-2 place-content-center'>
            <h1 className="text-4xl text-RES_ORANGE font-bold my-7">Home</h1>
            <div className='justify-self-end self-center grid grid-cols-2 my-7'>
                {/* <span className='font-bold text-4xl self-center grid'> COMPANY </span> */}
            </div>
        </div>
    );
}


function Templates(){
    return(
      <div className='my-10'>
        <div className='flex my-3'>
            <h1 className='w-fit mr-5 text-2xl text-RES_ORANGE font-bold'>Templates</h1>
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
          <h2 className="text-lg font-bold">Type/TemplateID</h2>
        </div>

        <div className='col-start-2'>
          <h2 className='text-lg font-bold'>Template Name</h2>
        </div>

        <div className='col-start-3'>
          <h2 className='text-lg font-bold'>Creation Date</h2>
        </div>

        <div className='col-start-4'>
          <h2 className='text-lg font-bold'>Last Modified</h2>  
        </div>

        <div className='col-start-7'>
          <h2 className='text-lg inline'>Sort </h2>  
          <h2 className='font-bold inline'>A-Z</h2>
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
          <h1 className='text-lg '>ICON/No</h1>
        </div>  

        <div className="col-span-1">
          <h2 className='text-lg'>TemplateNo</h2>
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
    <Link href="/pages/template-page">
      <div className='text-center w-5/6'>
        <div className="justify-center flex rounded-xl p-2 border-black border-2 relative bg-[#616673]">
          <p className="text-slate-50 basis-10/11">Edit</p>
        </div>
      </div>
    </Link>
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

