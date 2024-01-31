import Image from 'next/image';

import TrashIcon from "@app/images/trash-icon.svg"
import UpArrow from "@app/images/up-arrow.svg"
import DownArrow from "@app/images/down-arrow.svg"
import BarGraph from "@app/images/bar-graph.svg"
import EditIcon from "@app/images/edit-icon.svg"
import Link from 'next/link';
import Eye from "@app/images/eye.png"
import { PlotData } from '@app/modules/db';
import { WithId } from 'mongodb';

interface PlotElementProps {
  plot: WithId<PlotData>;
}

export const PlotElement = (props: PlotElementProps) => {
  const plot = props.plot;
  return(
      <div className='flex text-black drop-shadow-lg' >

        {/* The movement control and delete div */}
        <div className='flex flex-col justify-center items-center '>
            <Image src={UpArrow} alt='UpArrow' className='w-10 h-10'/>
            <Image src={DownArrow} alt='DownArrow' className='w-10 h-10'/>
        </div> 

        {/* The plot box div */}
        <div className={`flex justify-between items-center w-[750px] h-[100px] border-gray-400 bg-[#edeef2] p-3 rounded-lg border-4 px-4`}>
            <div className='flex gap-x-5 items-center'>
              <p className='text-3xl basis-[10%]'> {plot.order.toString() + "."} </p>
              <Image src={BarGraph} alt='BarGraph' className='w-10 h-10 basis-[15%]'/>
            </div>
            <h1 className='text-2xl h-fit font-medium basis-[50%] truncate'> {plot.config_file.labellingOptions.title.plotTitle} </h1>
            <div className='flex gap-x-10'>
              <Image src={Eye} alt='Preview' className='w-8 h-8'/>
              <Link className='w-8 h-8' href={`/graph-editor/${plot._id}`}>
                <Image src={EditIcon} alt="EditIcon" className='w-8 h-8'/>
              </Link>
              <Image src={TrashIcon} alt='TrashIcon' className='w-8 h-8'/>
            </div>

        </div>
      </div>
    )
};