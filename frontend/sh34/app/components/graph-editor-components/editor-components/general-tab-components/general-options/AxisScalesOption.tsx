import { OptionComponentTitle } from "../../OptionComponentTitle"
import { useState } from "react";


export const AxisScaleOption = () => {

    const [xlinearSelected, setXLinearSelected] = useState(true);
    const [ylinearSelected, setYLinearSelected] = useState(true);

    const handleXLinearClicked = () => {
        setXLinearSelected(true);
    } 

    const handleXLogClicked = () => {
        setXLinearSelected(false);
    }

    const handleYLinearClicked = () => {
        setYLinearSelected(true);
    } 

    const handleYLogClicked = () => {
        setYLinearSelected(false);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="X-Axis Scale" />
                <div className="mx-3 mb-4">
                    <div className="flex-grow h-[35px] bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded-md flex items-center mb-2 ">
                    <button className={`w-[50%] flex-grow text-center h-full rounded ${xlinearSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleXLinearClicked}>Linear</button>
                    <div className={` bg-gray-300 w-[2px] h-[70%]`}></div>
                    <button className={`w-[50%] flex-grow text-center h-full rounded ${!xlinearSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleXLogClicked}>Logarithmic</button>
                    </div>
                </div>
                <OptionComponentTitle optionName="Y-Axis Scale" />
                <div className="mx-3 mb-4">
                    <div className="flex-grow h-[35px] bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded-md flex items-center mb-2 ">
                    <button className={`w-[50%] flex-grow text-center h-full rounded ${ylinearSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleYLinearClicked}>Linear</button>
                    <div className={` bg-gray-300 w-[2px] h-[70%]`}></div>
                    <button className={`w-[50%] flex-grow text-center h-full rounded ${!ylinearSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleYLogClicked}>Logarithmic</button>
                    </div>
                </div>
        </div>
    ) 
}