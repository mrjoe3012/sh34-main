import Link from 'next/link';
import Image from 'next/image';
import { Main } from 'next/document';
import { Navbar } from '../Navbar/page';
import Document from "./../images/Document-icon.png"
import Alogo from "./../images/Alogo.png"
import UKflag from "./../images/UKflag.png"

export default function Home() {
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
      <Companies />
    </div>
  );
}

function Recents(){
  return(
  <div>
     <h1 className='text-2xl text-RES_ORANGE font-bold ml-12'>Recent Templates</h1>
      <RecentElements />
    </div>
  );
}

function RecentElements(){
  return(
    <div className="justify-center align-middle">
      <div className="flex p-2 justify-between mx-20">
        <RecentElement />
        <RecentElement />
        <RecentElement />
        <RecentElement />
        <RecentElement />
      </div>  
    </div>
  );
}

function RecentElement(){
  return(
    <div className='container rounded border border-black w-40 bg-slate-200 pt-1'> {/* background as the image on the wireframe */}
          <div className="grid grid-cols-3">
            <div className='relative'>
                {/* <h1 className='text-sm'>LOGO</h1> */}
                <Image src={Alogo} alt="test" fill={true} className="self-center object-cover"/>
            </div>
            <div className='text-center col-span-2'>
                <h1 className='text-sm'>Company</h1>
            </div>
          </div>
          <hr></hr>
          <div className='m-1'>
            <div className='text-left'>
              <h1 className='text-base'>Asset Name</h1>
            </div>
            <div className='w-1/3'>
              <div className='relative'> 
                <h1 className='text-lg '>FLAG</h1> {/* this line is needed to display the flag must be creating a space for the img */}
                <Image src={UKflag} alt="UK Flag" fill={true} /> 
              </div>
            </div>
            <div>
              <p>Last Modified: 15/02/2023</p>
            </div>
          </div>
        </div>
  )
}

function Companies(){
  return(
    <div>
      <br></br><br></br>
      <h1 className='text-2xl text-RES_ORANGE font-bold ml-12'>All Companies</h1>
        <CompanyHeader />
        <CompanyElement />
        <CompanyElement />
        <CompanyElement />
        <CompanyElement />
    </div>
  );
}

function CompanyHeader(){
  return(
    <div className='inherit'>
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

function CompanyElement(){
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
          <ViewPortfolio />
        </div>
      </div>
      <hr className="h-0.5 bg-GRIDLINES border-none mr-4 ml-4"></hr>
    </div>

  );
}

function ViewPortfolio(){
  return(
    <div className='text-center'>
      <div className="flex rounded-xl p-2 border-black border-2 relative bg-test">
        {/* <p className='text-white'>little img</p> */}
        <div className='relative p-0 basis-1/3'> 
          <Image src={Document} alt="test" fill={true} className="self-center rounded object-contain p-0"/>
        </div>
        <p className="text-black basis-10/11">View Portfolio</p>
      </div>
    </div>
  );
}

function MainElement() {
  return (
    <div className="p-4">
      <div className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-400">
        <p className="text-black">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

function Sidebar() {
    return (
      <div className="h-full bg-slate-50">
        {/* <HomeButton /> */}
        <div className="h-5/6 pt-6 flex flex-col space-y-6">
          <SidebarElement />
          <SidebarElement />
          <SidebarElement />
          <SidebarElement />
          <SidebarElement />
        </div>
      </div>
    );
  }

  function SidebarElement() {
    return (
      <div className="rounded h-1/4 bg-slate-500 mx-2">
        <Link href="/">
          <button>
            <h1 className="text-lg">Event</h1>
            <h2 className="text-base">Date</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
          </button>
        </Link>
      </div>
        
  
    );
  }


  
 