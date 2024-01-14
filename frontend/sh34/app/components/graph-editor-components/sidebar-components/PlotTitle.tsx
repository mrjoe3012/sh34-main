import Image from 'next/image';
import UKflag from "@app/images/UKflag.png"
import { useContext } from 'react';
import { PlotOptionsContext } from '@app/graph-editor/PlotOptionsContext';

export const PlotTitle = () => {
    const { plot } = useContext(PlotOptionsContext);
    return (
      <div className='flex p-2 my-2'>
        <div className='text-center w-full self-center'>
          <p className='font-semibold text-2xl'>{plot != null ? plot.plot_title : "Plot Title"}</p>
        </div>
      </div>
    );
  };