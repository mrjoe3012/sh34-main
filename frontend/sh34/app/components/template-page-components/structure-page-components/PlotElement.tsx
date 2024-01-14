import Image from 'next/image';

import TrashIcon from "@app/images/trash-icon.svg"
import UpArrow from "@app/images/up-arrow.svg"
import DownArrow from "@app/images/down-arrow.svg"
import BarGraph from "@app/images/bar-graph.svg"
import PieChart from "@app/images/pie-chart.svg"
import ScatterGraph from "@app/images/scatter-graph.svg"
import EditIcon from "@app/images/edit-icon.svg"
import Link from 'next/link';
import Eye from "@app/images/eye.png"
import { PlotData } from '@app/modules/db';
import { WithId } from 'mongodb';

interface PlotElementProps {
  backgroundColour: string;
  plot: WithId<PlotData>;
}

export const PlotElement = (props: PlotElementProps) => {
  const plot = props.plot;
  return(
      <div className='flex text-black drop-shadow-lg	' >

        {/* The movement control and delete div */}
        <div className='flex flex-col justify-center items-center '>
            <Image src={UpArrow} alt='UpArrow' className='w-10 h-10'/>
            <Image src={DownArrow} alt='DownArrow' className='w-10 h-10'/>
        </div> 

        {/* The plot box div */}
        <div className={`flex gap-x-10 justify-between items-center w-[650px] h-[100px] ${props.backgroundColour} p-3 rounded-lg border-4`}>
            <p className='text-3xl'> {plot.order.toString() + "."} </p>
            <Image src={BarGraph} alt='BarGraph' className='w-10  '/>
            <h1 className='text-3xl h-fit flex-grow font-medium'> {plot.plot_title} </h1>
            <div className='flex gap-x-10'>
              <Image src={Eye} alt='Preview' className='w-8 h-8'/>
              <Image src={EditIcon} alt="EditIcon" className='w-8 h-8'/>
              <Image src={TrashIcon} alt='TrashIcon' className='w-8 h-8'/>
            </div>

        </div>



      </div>
    )
};