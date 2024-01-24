import { useState } from "react";
import { NewPlotPopup } from "./NewPlotPopup";

export const NewPlotButton = () => {

    const [showNewPlotPopup, setShowNewPlotPopup] = useState(false);

    const togglePopup = () => {
        setShowNewPlotPopup(!showNewPlotPopup);
    }

    return (
        <div>
            <button onClick={togglePopup} className={`text-center text-xl font-medium text-white h-[60px] w-[170px] bg-[#44C125] rounded-xl flex justify-center items-center border-[2px] border-slate-700`}>
                <p> New Plot </p>
            </button>
            {showNewPlotPopup && <NewPlotPopup closeButtonFunction={togglePopup}/> }
        </div>

    );
}