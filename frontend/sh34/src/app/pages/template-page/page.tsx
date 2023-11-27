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
        <div className='basis-[85%] bg-[#e1e3e8]'>
            <PlotList />
        </div>

    </div>
  );
}


function PlotList(){
    return (
      <div className='flex flex-col gap-y-5 overflow-auto'>
        <PlotElement />
        <PlotElement />
      </div>
    )
}


function PlotElement(){
    return(
      <div className='flex '>

        {/* The movement control and delete div */}
        <div className=''>
          <Image src={TrashIcon} alt='TrashIcon' />
          <Image src={UpArrow} alt='UpArrow' />
          <Image src={DownArrow} alt='DownArrow' />
        </div> 

        {/* The plot box div */}
        <div className='w-80 bg-slate-400'>

          <div>
            <p> 1. </p>
            <Image src={BarGraph} alt='BarGraph' />
          </div>
          <div>
            <h1> Plot Title. </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
          </div>

        </div>
        
        {/* The Edit Plot Button */}
        <div>
          <Image src={EditIcon} alt="EditIcon" />
        </div>


      </div>
    )
}

