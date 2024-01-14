import { useState } from 'react';
import { ScatterPointSizeConstantOption } from './ScatterPointSizeConstantOption';
import { ScatterPointSizeScaleOption } from './ScatterPointSizeScaleOption';

interface scatterPointSizeTabProps {
    switchTabFunction: (someComponent: JSX.Element) => void;
}

export const ScatterPointSizeTabSwitcher = (props : scatterPointSizeTabProps) => {
    
    const [constantClicked, setConstantClicked] = useState(true);
    const [scaleClicked, setScaleClicked] = useState(false);

    const handleConstantClicked = () => {
        setConstantClicked(true);
        setScaleClicked(false);
        props.switchTabFunction(<ScatterPointSizeConstantOption />)
    }

    const handleScaleClicked = () => {
        setConstantClicked(false);
        setScaleClicked(true);
        props.switchTabFunction(<ScatterPointSizeScaleOption />)
    }
    
    return (
        <div className="w-40 h-[35px] bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded flex items-center mb-2 ml-3">
                <button className={`w-[60%] flex-grow text-center h-full rounded ${constantClicked ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleConstantClicked}>Constant</button>
                <div className={`w-px bg-gray-300 w-[2px] h-[70%]`}></div>
                <button className={`w-[50%] flex-grow text-center h-full rounded ${scaleClicked ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleScaleClicked}>Scale</button>
        </div>
    )
}