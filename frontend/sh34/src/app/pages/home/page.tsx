import Link from 'next/link';
import Image from 'next/image';
import { Main } from 'next/document';
import { Navbar } from '../../components/navbar';
import { RecentElement } from '../../components/recentelement';
import Document from "./../../images/Document-icon.png"
import Alogo from "./../../images/Alogo.png"
import UKflag from "./../../images/UKflag.png"

export default function Home() {
    return (
      <div className="text-black bg-white overflow-hidden">
        <div className=''>
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
        <CompaniesSection />
      </div>
    </div>
  );
}

function Header(){
  return(
      <div className=''>
          <h1 className="text-4xl text-RES_ORANGE font-bold my-7">Home</h1>
      </div>
  );
}

function RecentTemplateList(){
  return(
  <div className=''>
      <div className='flex my-3'>
          <span className='whitespace-nowrap w-fit mr-5 text-2xl text-RES_ORANGE font-bold pr-0'>Recent Templates</span>
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






function CompaniesSection(){
  return(
    <div className='my-10'>
      <div className='flex my-3'>
          <h1 className='w-fit mr-5 text-2xl text-RES_ORANGE font-bold'>All Companies</h1>
          <hr className='flex-grow h-1 m-auto'></hr>
      </div>
          <CompanyTableHeader />
          <CompanyTableElement />
          <CompanyTableElement />
          <CompanyTableElement />
          <CompanyTableElement />
    </div>
  );
}

function CompanyTableHeader(){
  return(
    <div className=''>
      <div className='grid p-4 grid-cols-companyTableHeaderLayout'>

        <div className='col-start-1'>
          
        </div>

        <div className='col-start-2 justify-self-center self-center'>
          <h2 className='text-lg font-bold'>Company Name</h2>
        </div>

        <div className='col-start-3 justify-self-center self-center'>
          <h2 className='text-lg font-bold'>No. Assets</h2>
        </div>

      </div>
      <hr className='bg-slate-900'></hr>
    </div>
  );
}


function CompanyTableElement(){

  return(
    <div>
      <div className='grid p-4 grid-cols-companyTableElementLayout auto-rows-[40px]'>

        <div className='relative align-baseline col-span-1 justify-self-center self-center'> 
          <Image src={Alogo} alt="test" className="w-20 h-10 self-center object-cover rounded"/>
        </div>  

        <div className="col-span-1 justify-self-center self-center">
          <h2 className='text-lg'>Company</h2>
        </div>

        <div className="col-span-1 justify-self-center self-center">
            <h2 className='text-lg'>2</h2>
        </div>

        <div>
        </div>

        <div className="">
            <ViewPortfolio />
        </div>


      </div>
      <hr className='w-[95%] mx-auto'></hr>
    </div>

  );

}





function ViewPortfolio(){
  return(
      <div className='text-center w-5/6'>
        <div className="justify-center flex gap-x-2 rounded-xl p-2 border-black border-2 relative bg-[#346DFF]">
          <Image alt='documentlogo' src={Document} className='object-contain w-[25px] h-[25px]'/>
          <p className="text-slate-50 basis-10/11">View Portfolio</p>
        </div>
      </div>
  );
}



 