import Image from 'next/image';

import TrashIcon from "./../../images/trash-icon.svg"
import UpArrow from "./../../images/up-arrow.svg"
import DownArrow from "./../../images/down-arrow.svg"
import BarGraph from "./../../images/bar-graph.svg"
import PieChart from "./../../images/pie-chart.svg"
import ScatterGraph from "./../../images/scatter-graph.svg"
import EditIcon from "./../../images/edit-icon.svg"

export const PlotElement = () => {
    return(
        <div className='flex text-black'>
  
          {/* The movement control and delete div */}
          <div className='flex flex-col justify-center items-center '>
              <Image src={UpArrow} alt='UpArrow' className='w-10 h-10'/>
              <Image src={DownArrow} alt='DownArrow' className='w-10 h-10'/>
          </div> 
  
          {/* The plot box div */}
          <div className='flex gap-x-5 w-[400px] bg-[#D3E3FD] p-3 rounded-xl border-4 border-black shadow-lg'>
  
            <div className='flex flex-col w-[10%]'>
              <p className='text-3xl'> 1. </p>
              <Image src={BarGraph} alt='BarGraph' className='w-10 mt-auto'/>
            </div>
  
            <div className='flex flex-col '>
              <h1 className='text-2xl'> Plot Title. </h1>
              <div>
                <p> Lorem ipsum: 431 </p>
                <p> Consectetur adipiscing - 233 </p>
                <p> Tempor incididunt ut - 81 </p>
                <p> Labore et dolore - 789 </p>
              </div>
            </div>
  
          </div>
          
          {/* The Edit Plot Button */}
          <div className='flex flex-col justify-center items-center gap-y-10'>
            <Image src={EditIcon} alt="EditIcon" />
            <Image src={TrashIcon} alt='TrashIcon' className=''/>
          </div>
  
  
        </div>
      )
  };