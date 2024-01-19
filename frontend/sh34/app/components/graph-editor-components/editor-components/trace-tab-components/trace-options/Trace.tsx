import { useState } from "react"
import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericPlotTypeOption } from "../../generic-components/GenericPlotTypeOption";
import { GenericIndicatorOption } from "../../generic-components/GenericIndicatorOption";

export const Trace = () => {

    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Trace" />
            <div className="flex flex-col gap-y-1">
                < GenericPlotTypeOption />
                <div className="self-center bg-[#d6d6d6] h-[2px] w-[90%] rounded-xl my-2"></div>
                < GenericIndicatorOption labelName="Indicator" displayLabel={true}/>
            </div>
        </div>
    )
}