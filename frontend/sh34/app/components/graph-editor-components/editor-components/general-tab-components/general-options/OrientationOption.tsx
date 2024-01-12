import { OptionComponentTitle } from "../../OptionComponentTitle"
import { useState } from "react";


export const OrientationOption = () => {

    const [horizontalSelected, setHorizontalSelected] = useState(true);

    const handleHorizontalClicked = () => {
        setHorizontalSelected(true);
    } 

    const handleVerticalClicked = () => {
        setHorizontalSelected(false);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Orientation" />
                <div className="mx-3">
                    <div className="flex-grow h-[35px] bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded-md flex items-center mb-2 ">
                    <button className={`w-[50%] flex-grow text-center h-full rounded ${horizontalSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleHorizontalClicked}>Horizontal</button>
                    <div className={` bg-gray-300 w-[2px] h-[70%]`}></div>
                    <button className={`w-[50%] flex-grow text-center h-full rounded ${!horizontalSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleVerticalClicked}>Vertical</button>
                    </div>
                </div>
        </div>
    ) 
}