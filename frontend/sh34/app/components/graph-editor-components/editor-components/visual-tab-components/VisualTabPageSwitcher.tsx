import { useState } from 'react';
import { VisualTextTab } from "./visual-options/text-tab/VisualTextTab";
import { VisualColourTab } from './visual-options/colour-tab/VisualColourTab';
import { VisualTraceTab } from './visual-options/trace-tab/VisualTraceTab';

interface VisualTabSwitcherProps {
    switchTabFunction: (someComponent: JSX.Element) => void;
}
  
  
export const VisualTabPageSwitcher = (props: VisualTabSwitcherProps) => {

    const [textClicked, setTextClicked] = useState(true);
    const [colourClicked, setColourClicked] = useState(false);
    const [traceClicked, setTraceClicked] = useState(false);
        
    const handleTextClick = () => {
        setTextClicked(true);
        setColourClicked(false);
        setTraceClicked(false);
        props.switchTabFunction(<VisualTextTab />);
    }

    const handleColourClick = () => {
        setTextClicked(false);
        setColourClicked(true);
        setTraceClicked(false);
        props.switchTabFunction(<VisualColourTab />);
    }

    const handleTraceClick = () => {
        setTextClicked(false);
        setColourClicked(false);
        setTraceClicked(true);
        props.switchTabFunction(<VisualTraceTab />);

    }

    return(
        <div className='flex flex-row bg-[#EAEAEA] w-full h-[45px] items-center justify-center rounded mb-7'>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center text-xl ${textClicked ? 'text-RES_ORANGE font-bold' : ''}`} onClick={handleTextClick}> Text </button>
            <div className='bg-[#D5D5D5] w-[3px] h-[80%] '></div>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center text-xl ${colourClicked ? 'text-RES_ORANGE font-bold' : ''}`} onClick={handleColourClick}> Colour </button>
            <div className='bg-[#D5D5D5] w-[3px] h-[80%] '></div>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center text-xl ${traceClicked ? 'text-RES_ORANGE font-bold' : ''}`} onClick={handleTraceClick}> Trace </button>
        </div>
    );
}