'use client';
import { useState } from "react";
import { NewTemplatePopup } from "./NewTemplatePopup";

export const NewTemplateButton = () => {

    const [showNewTemplatePopup, setShowNewTemplatePopup] = useState(false);

    const togglePopup = () => {
      setShowNewTemplatePopup(!showNewTemplatePopup);
    }

    return(
        <div>
          <button onClick={togglePopup} className='text-center w-9/10'>
            <div className="h-full justify-center flex rounded p-2 border-black border-2 font-semibold relative bg-green-600 text-white  ">
              <p className="basis-10/11 inline-block">New Template</p>
            </div>
          </button>
          {showNewTemplatePopup && < NewTemplatePopup closeButtonFunction={togglePopup}/>}
        </div>
    );
}