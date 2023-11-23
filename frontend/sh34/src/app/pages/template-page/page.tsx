import Link from 'next/link';
import Image from 'next/image';
import { Main } from 'next/document';
import { Navbar } from '../../components/navbar';
import Document from "./../../images/Document-icon.png"
import Alogo from "./../../images/Alogo.png"
import UKflag from "./../../images/UKflag.png"

export default function Home() {
    return (
      <div className="text-black h-screen flex flex-col h-screen">
        <Navbar />
        <hr className="h-0.5 border-none bg-RES"></hr>
        <Body />
      </div>
    );
  } 

  
function Body() {
  return (
    <div className="bg-white flex flex-row flex-1 overflow-auto">
        <div className='basis-[15%] flex flex-col bg-[#F6F8FC]'>

          <div className='p-2'>
            <p>Return to COMPANY</p>
          </div>
          <hr></hr>

          <div className='flex p-2'>
            <Image src={UKflag} alt='UkFlag' className='basis-[20%] w-15 h-10 rounded'/>
            <div className='text-center w-full self-center'>
              <p>Wind Farm 1</p>
            </div>
          </div>
          <hr></hr>

          <div className=''> 
            <div className='p-2 pl-10 '> Info </div>
            <div className='p-2 pl-10 '> Structure </div>
            <div className='p-2 pl-10 '> Tab 3 </div>
            <div className='p-2 pl-10 '> Tab 4 </div>
            <div className='p-2 pl-10'> Tab 5 </div>
          </div>
          <div className='mt-auto'>
            <div className='p-2 text-center'> Preview </div>
            <div className='p-2 text-center'> Export </div>
          </div>

        </div>
        <div className='basis-[85%] bg-[#e1e3e8]'>
            <PlotList />
        </div>

    </div>
  );
}


function PlotList(){
    return (
        <div>
            <div className='p-4'>
                <PlotElement />
                <PlotElement />
                <PlotElement />
                <PlotElement />
                <PlotElement />
                <PlotElement />
                <PlotElement />
            </div>
            
        </div>
    )
}


function PlotElement(){
    return(
        <div>
            <div className='container rounded border border-black w-200 h-200 bg-RES_BLUE pt-1'> {/* background as the image on the wireframe */}
          <div className="grid grid-cols-3">
            <div className='relative'>
                <h1 className='text-xl'>1.</h1>
            </div>
            <div className='text-center col-span-2'>
                <h1 className='text-xl'>Plot Title</h1>
            </div>
          </div>
          <hr></hr>
          <div className='m-1 flex'>
            <div className='w-1/4'>
              <div className='relative'> 
              <h1 className='text-lg '>FLAG</h1>{/* this line is needed to display the flag must be creating a space for the img */}
                <Image src={UKflag} alt="UK Flag" fill={true} /> 
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

