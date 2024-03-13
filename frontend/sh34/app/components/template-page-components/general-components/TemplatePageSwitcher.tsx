// Component for the button to switch between Info/Structure tabs on Template Page
import { useState } from 'react';
import { InfoPage } from "../info-page-components/InfoPage";
import { StructurePage } from "../structure-page-components/StructurePage";
import { PreviewPage } from '../preview-page-components/PreviewPage';


interface TemplatePageSwitcherProps {
  switchTabFunction: (someComponent: JSX.Element) => void;
}


export const TemplatePageSwitcher = (props: TemplatePageSwitcherProps) => {

  const [structureClicked, setStructureClicked] = useState(true);
  const [infoClicked, setInfoClicked] = useState(false);
  const [previewClicked, setPreviewClicked] = useState(false);

  const handleStructureClick = () => {
    setStructureClicked(true);
    setInfoClicked(false);
    setPreviewClicked(false);
    props.switchTabFunction(<StructurePage/>);
  }

  const handleInfoClick = () => {
    setStructureClicked(false);
    setInfoClicked(true);
    setPreviewClicked(false);
    props.switchTabFunction(<InfoPage/>);
  }

  const handlePreviewClicked = () => {
    setStructureClicked(false);
    setInfoClicked(false);
    setPreviewClicked(true);
    props.switchTabFunction(<PreviewPage />)
  }

    return(
        <div className='flex flex-row bg-[#EAEAEA] w-[350px] h-[60px] items-center justify-center rounded-xl'>
          <button className={`hover:text-[#8f8f8f] ml-1 h-full mr-1 w-[50%] flex justify-center items-center text-2xl ${structureClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleStructureClick}> Structure </button>
          <div className='bg-[#D5D5D5] w-[3px] h-[80%] self-center'></div>
          <button className={`hover:text-[#8f8f8f] h-full mr-1 w-[50%] flex justify-center items-center text-2xl ${infoClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleInfoClick}>Info</button>
          <div className='bg-[#D5D5D5] w-[3px] h-[80%] self-center'></div>
          <button className={`hover:text-[#8f8f8f] h-full mr-1 w-[50%] flex justify-center items-center text-2xl ${previewClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handlePreviewClicked}>Preview</button>
        </div>
    );
}