import { OptionComponentTitle } from "./OptionComponentTitle"
import { useState } from 'react';

export const DataPointColourOption = () => {

    const [constantClicked, setConstantClicked] = useState(true);
    const [scaleClicked, setScaleClicked] = useState(false);

    const handleConstantClicked = () => {
        setConstantClicked(true);
        setScaleClicked(false);
    }

    const handleScaleClicked = () => {
        setConstantClicked(false);
        setScaleClicked(true);
    }

    return(
        <div>
            <OptionComponentTitle optionName="Data Point Colour Theme" />

            <div className="w-40 h-10 bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded flex items-center">
                <button className={`flex-grow text-center h-full rounded ${constantClicked ? 'bg-[#346DFF] text-white' : 'bg-[#EAEAEA] text-black'}`} onClick={handleConstantClicked}>Constant</button>
                <div className={`w-px bg-gray-300 w-[2px] h-[70%]`}></div>
                <button className={`flex-grow text-center h-full rounded ${scaleClicked ? 'bg-[#346DFF] text-white' : 'bg-[#EAEAEA] text-black'}`} onClick={handleScaleClicked}>Scale</button>
            </div>

        </div>
    )
}