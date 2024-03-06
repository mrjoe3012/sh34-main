import { useState } from "react";
import { NewPlotPopup } from "./NewPlotPopup";
import PlusIcon from "@app/images/plus-icon.svg"
import Image from "next/image";

export const NewPlotButton = () => {

    const [showNewPlotPopup, setShowNewPlotPopup] = useState(false);

    const togglePopup = () => {
        setShowNewPlotPopup(!showNewPlotPopup);
    }

    return (
        <div>
            <button onClick={togglePopup} className={`shadow-lg text-center text-xl font-medium text-white h-[45px] px-[30px] bg-[#44C125] hover:bg-[#73de49] rounded-lg flex gap-x-2 justify-center items-center border-[0px] border-slate-700`}>
                <Image src={PlusIcon} alt="new" className="mb-[2px] w-4 h-4 self-center"/>
                <p> Plot </p>
            </button>
            {showNewPlotPopup && <NewPlotPopup closeButtonFunction={togglePopup}/> }
        </div>

    );
}