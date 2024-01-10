import Image from 'next/image';

import TrashIcon from "./../../../images/trash-icon.svg"
import UpArrow from "./../../../images/up-arrow.svg"
import DownArrow from "./../../../images/down-arrow.svg"
import BarGraph from "./../../../images/bar-graph.svg"
import PieChart from "./../../../images/pie-chart.svg"
import ScatterGraph from "./../../../images/scatter-graph.svg"
import EditIcon from "./../../../images/edit-icon.svg"
import Link from 'next/link';
import Eye from "./../../../images/eye.png"

interface PlotElementProps {
  backgroundColour: string;
}

export const PlotElement = (props: PlotElementProps) => {
    return(
        <div className='flex text-black drop-shadow-lg	' >
  
          {/* The movement control and delete div */}
          <div className='flex flex-col justify-center items-center '>
              <Image src={UpArrow} alt='UpArrow' className='w-10 h-10'/>
              <Image src={DownArrow} alt='DownArrow' className='w-10 h-10'/>
          </div> 
  
          {/* The plot box div */}
          <div className={`flex gap-x-10 justify-between items-center w-[650px] h-[100px] ${props.backgroundColour} p-3 rounded-xl border-4 border-black`}>
              <p className='text-3xl'> 1. </p>
              <Image src={BarGraph} alt='BarGraph' className='w-10  '/>
              <h1 className='text-3xl h-fit flex-grow font-medium'> Plot Title </h1>
              <div className='flex gap-x-10'>
                <Image src={Eye} alt='Preview' className='w-8 h-8'/>
                <Image src={EditIcon} alt="EditIcon" className='w-8 h-8'/>
                <Image src={TrashIcon} alt='TrashIcon' className='w-8 h-8'/>
              </div>

          </div>

  
  
        </div>
      )
  };