import { useState } from "react"

export const TickLabelPositionOption = () => {

    const [bottomSelected, setBottomSelected] = useState(true);

    const handleBottomClicked = () => {
        setBottomSelected(true);
    } 

    const handleTopClicked = () => {
        setBottomSelected(false);
    }

    return(
        <div className="flex gap-x-1 items-center">
            <div className="w-[70px] min-w-[70px]"> Position </div>
            <div className="flex-grow h-[35px] bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded-md flex items-center mb-2 ">
                <button className={`w-[50%] flex-grow text-center h-full rounded ${bottomSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleBottomClicked}>Bottom</button>
                <div className={` bg-gray-300 w-[2px] h-[70%]`}></div>
                <button className={`w-[50%] flex-grow text-center h-full rounded ${!bottomSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleTopClicked}>Top</button>
            </div>
        </div>
    )
}