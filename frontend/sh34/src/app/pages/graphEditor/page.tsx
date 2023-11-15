import Link from 'next/link';
import Image from 'next/image';
import { Main } from 'next/document';
import { Navbar } from '../../components/Navbar/navbar';
import Document from "./../../images/Document-icon.png"

export default function graphEditor() {
    return (
      <div className="text-black">
        <Navbar />       
        <Body />
      </div>
    );
  } 

  
function Body() {
  return (
    <div className="bg-gray h-screen">
    <Sidebar />
    </div>
  );
}

function Sidebar() {
    return(
        <div className="p-2 w-1/2 h-screen bg-white z-20 fixed top -left-96 lg:w-60 lg:left-0 flex-col justify-center">
            <h1 className="text-4xl text-RES_ORANGE font-bold p-6 flex justify-center">Title</h1>
            <hr className="h-0.5 border-none bg-RES bg-black"></hr>  
            <h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center">General</h3>
            <h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center">Labelling</h3>
            <h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center">Visual</h3>
            <h3 className="text-2xl text-RES_ORANGE font-bold p-6 flex justify-center">Data Mapping</h3>
            <div className="flex justify-center m-2">
                <button className="bg-COMPLETE text-2xl text-white font-bold p-4 w-64">Refresh</button>
            </div>
            <div className=" flex justify-center m-2">
                <button className="bg-gray-300 text-2xl text-white font-bold p-4 w-64">Upload</button>
            </div>
            <div className=" flex justify-center m-2">
                <button className="bg-FINISH text-2xl text-white font-bold p-4 w-64">Finish</button>
            </div>
            
        </div>
    );
}