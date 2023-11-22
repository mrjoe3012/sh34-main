import Link from 'next/link';
import Image from 'next/image';
import { Main } from 'next/document';
import { Navbar } from '../../components/navbar';
import Document from "./../../images/Document-icon.png"

export default function graphEditor() {
    return (
      <div className="text-black h-screen ">
        <Navbar />       
        <Body />
      </div>
    );
  } 

  
function Body() {
  return (
    <div className="bg-gray-600 h-[88%]">
    <Sidebar />
    <Footer />
    </div>
  );
}

function Sidebar() {
    return(
        <div className="p-3 h-full bg-white z-10 fixed w-60 left-0 flex-col justify-center">
            <div className="flex-grow">
                <h1 className="text-4xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">Title</h1>
                <hr className="h-0.5 border-none bg-RES bg-gray-500"></hr>  
                <h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">General</h3>
                <h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">Labelling</h3>
                <h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">Visual</h3>
                <h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center hover:font-bold">Data Mapping</h3>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-y-2">
                <div className="p-1 w-[80%] flex flex-col items-center bg-COMPLETE"><button className=" text-2xl text-white font-bold p-4">Refresh</button></div>
                <div className="p-1 w-[80%] flex flex-col items-center bg-gray-300" ><button className=" text-2xl text-black font-bold p-4 ">Upload</button></div>
                <div className="p-1 w-[80%] flex flex-col items-center bg-FINISH"><button className=" text-2xl text-white font-bold p-4">Finish</button></div>
            </div>
        </div>
    );
}

function Footer(){
    return(
        <footer className="fixed bottom-0 w-footer bg-white z-11 right-0 h-[20%]">
            <div className='inherit'>
                <div className='grid grid-cols-6 p-3'>
                    <div className='col-start-1 col-end-2'>
                    <h2 className="text-lg">Plot type</h2>
                    </div>
                    <div className='col-start-3 col-end-4'>
                    <h2 className='text-lg'>No. of Assets</h2>
                    </div>
                    <div className='col-start-4 col-end-5'>
                    <h2 className='text-lg'>No. of Assets</h2>
                    </div>
                    <div className='col-start-5 col-end-6'>
                    <h2 className='text-lg'>No. of Assets</h2>
                    </div>
                    <div className='col-start-6 col-end-7'>
                    <h2 className='text-lg'>No. of Assets</h2>
                    </div>
                </div>
                <hr className="h-1 bg-RES_ORANGE boder-none "></hr>
            </div>
        </footer>
    );
}