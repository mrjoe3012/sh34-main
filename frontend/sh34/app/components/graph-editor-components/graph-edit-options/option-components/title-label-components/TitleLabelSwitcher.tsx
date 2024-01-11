import { useState } from "react"

import { TitleLabelDefaultMode } from "./TitleLabelDefaultMode";
import { TitleLabelCustomMode } from "./TitleLabelCustomMode";

interface TitleLabelSwitcherProps {
    switchTabFunction: (someComponent: JSX.Element) => void;
}

export const TitleLabelSwitcher = (props : TitleLabelSwitcherProps) => {

    const [defaultSelected, setDefaultSelected] = useState(true);
    const [customSelected, setCustomSelected] = useState(false);

    const handleDefaultClicked = () => {
        setDefaultSelected(true);
        setCustomSelected(false);
        props.switchTabFunction(<TitleLabelDefaultMode />)
    }

    const handleCustomClicked = () => {
        setDefaultSelected(false);
        setCustomSelected(true);
        props.switchTabFunction(<TitleLabelCustomMode />)
    }

    return (
        <div className="w-40 h-[35px] bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded flex items-center mb-2 ml-3">
            <button className={`w-[50%] flex-grow text-center h-full rounded ${defaultSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleDefaultClicked}>Default</button>
            <div className={`w-px bg-gray-300 w-[2px] h-[70%]`}></div>
            <button className={`w-[50%] flex-grow text-center h-full rounded ${customSelected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleCustomClicked}>Custom</button>
        </div>
    )
}