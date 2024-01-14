// Component for the button to switch between Info/Structure tabs on Template Page
import { useState } from 'react';
import { InfoPage } from "../info-page-components/InfoPage";
import { StructurePage } from "../structure-page-components/StructurePage";
import { PlotData } from '@app/modules/db';
import { WithId } from 'mongodb';

interface TemplatePageSwitcherProps {
  switchTabFunction: (someComponent: JSX.Element) => void;
  plots: WithId<PlotData>[];
}


export const TemplatePageSwitcher = (props: TemplatePageSwitcherProps) => {

  const [structureClicked, setStructureClicked] = useState(true);
  const [infoClicked, setInfoClicked] = useState(false);
    
  const handleStructureClick = () => {
    setStructureClicked(true);
    setInfoClicked(false);
      props.switchTabFunction(<StructurePage plots={props.plots}/>);
  }

  const handleInfoClick = () => {
    setStructureClicked(false);
    setInfoClicked(true);
      props.switchTabFunction(<InfoPage/>);
  }

    return(
        <div className='flex flex-row bg-[#EAEAEA] w-[350px] h-[60px] items-center justify-center rounded-xl'>
          <button className={`h-full mr-1 w-[50%] flex justify-center items-center text-2xl ${structureClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleStructureClick}> Structure </button>
          <div className='bg-[#D5D5D5] w-1 h-[80%] self-center'></div>
          <button className={`h-full mr-1 w-[50%] flex justify-center items-center text-2xl ${infoClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleInfoClick}>Info</button>
        </div>
    );
}