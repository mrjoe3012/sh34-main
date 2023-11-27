import Link from 'next/link';
import Image from 'next/image';

import TrashIcon from "./../../images/trash-icon.svg"
import UpArrow from "./../../images/up-arrow.svg"
import DownArrow from "./../../images/down-arrow.svg"
import BarGraph from "./../../images/bar-graph.svg"
import PieChart from "./../../images/pie-chart.svg"
import ScatterGraph from "./../../images/scatter-graph.svg"
import EditIcon from "./../../images/edit-icon.svg"

import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/template-page-components/Sidebar';

export default function Home() {
    return (
      <div className="text-black flex flex-col h-screen">
        <Navbar />
        <hr className="h-0.5 border-none bg-RES"></hr>
        <Body />
      </div>
    );
  } 

  
function Body() {
  return (
    <div className="bg-white flex flex-row flex-1 overflow-auto">
        <Sidebar />
        <div className='basis-[85%] bg-[#e1e3e8] p-16 flex justify-center overflow-auto'>
            <PlotList />
        </div>

    </div>
  );
}


function PlotList(){
    return (
      <div className='flex flex-col gap-y-5'>
        <PlotElement />
        <PlotElement />
        <PlotElement />
        <PlotElement />
        <PlotElement />
        <PlotElement />
      </div>
    )
}


function PlotElement(){
    return(
      <div className='flex text-black'>

        {/* The movement control and delete div */}
        <div className='flex flex-col justify-center items-center'>
            <Image src={UpArrow} alt='UpArrow' className='w-10 h-10'/>
            <Image src={DownArrow} alt='DownArrow' className='w-10 h-10'/>
        </div> 

        {/* The plot box div */}
        <div className='flex gap-x-5 w-[400px] bg-slate-400 p-3 rounded-xl border-4 border-black'>

          <div className='flex flex-col w-[30%]'>
            <p className='text-3xl'> 1. </p>
            <Image src={BarGraph} alt='BarGraph' className='w-full mt-auto'/>
          </div>

          <div className='flex flex-col '>
            <h1 className='text-2xl'> Plot Title. </h1>
            <p className='pl-1'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
          </div>

        </div>
        
        {/* The Edit Plot Button */}
        <div className='flex flex-col'>
          <Image src={EditIcon} alt="EditIcon" />
          <Image src={TrashIcon} alt='TrashIcon' className='mt-auto'/>
        </div>


      </div>
    )
}

