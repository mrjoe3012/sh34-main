import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericTwoButtonOption } from "../../generic-components/GenericTwoButtonOption";
import { useState } from "react";


export const OrientationOption = () => {
    const changeOrientationHorizontal = (inputValue: string) => {
        // Enter logic here for toggling orientation to horizontal
        
        console.log("Toggled orientation to " + inputValue);
    }

    const changeOrientationVertical = (inputValue: string) => {
        // Enter logic here for toggling orientation to vertical
        console.log("Toggled orientation to " + inputValue);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Orientation" />
                <div className="mx-3"><GenericTwoButtonOption firstOptionLabel="Horizontal" secondOptionLabel="Vertical" firstOptionFunction={changeOrientationHorizontal} secondOptionFunction={changeOrientationVertical} /></div>
        </div>
    ) 
}