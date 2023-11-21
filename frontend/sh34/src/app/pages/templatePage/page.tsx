import Link from 'next/link';
import Image from 'next/image';
import { Main } from 'next/document';
import { Navbar } from '../../components/navbar';
import Document from "./../../images/Document-icon.png"
import Alogo from "./../../images/Alogo.png"
import UKflag from "./../../images/UKflag.png"

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
    <div className="bg-white flex flex-row">
        <div className='basis-[15%] h-screen bg-red-600'>Sidebar</div>
        <div className='basis-[85%]'>
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

