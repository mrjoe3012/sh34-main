'use client';
import { useState } from "react";
import { NewTemplatePopup } from "./NewTemplatePopup";
import Image from "next/image";
import PlusIcon from "@app/images/plus-icon.svg"

export const NewTemplateButton = () => {

    const [showNewTemplatePopup, setShowNewTemplatePopup] = useState(false);

    const togglePopup = () => {
      setShowNewTemplatePopup(!showNewTemplatePopup);
    }

    return(
        <div>
            <button onClick={togglePopup} className={`shadow-lg text-center text-xl font-medium text-white h-[45px] px-[30px] bg-[#44C125] hover:bg-[#73de49] rounded-lg flex gap-x-2 justify-center items-center border-[0px] border-slate-700`}>
                <Image src={PlusIcon} alt="new" className="mb-[2px] w-4 h-4 self-center"/>
                <p> Template </p>
            </button>
          {showNewTemplatePopup && < NewTemplatePopup closeButtonFunction={togglePopup}/>}
        </div>
    );
}