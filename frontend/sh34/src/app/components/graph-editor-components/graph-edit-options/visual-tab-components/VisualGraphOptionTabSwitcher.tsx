import { useState } from 'react';
import { VisualTextTab } from "./VisualTextTab";
import { VisualColourTab } from './VisualColourTab';
import { VisualTraceTab } from './VisualTraceTab';

interface VisualTabSwitcherProps {
    switchTabFunction: (someComponent: JSX.Element) => void;
}
  
  
export const VisualTabSwitcher = (props: VisualTabSwitcherProps) => {

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
        <div className='flex flex-row bg-[#EAEAEA] w-full h-[50px] items-center justify-center rounded-lg'>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center text-xl ${textClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleTextClick}> Text </button>
            <div className='bg-[#D5D5D5] w-1 h-[80%] self-center'></div>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center text-xl ${colourClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleColourClick}> Colour </button>
            <div className='bg-[#D5D5D5] w-1 h-[80%] self-center'></div>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center text-xl ${traceClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleTraceClick}> Trace </button>
        </div>
    );
}