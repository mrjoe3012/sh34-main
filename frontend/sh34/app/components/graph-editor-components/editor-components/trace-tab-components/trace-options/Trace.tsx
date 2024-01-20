import { useState } from "react"
import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericPlotTypeOption } from "../../generic-components/GenericPlotTypeOption";
import { GenericIndicatorOption } from "../../generic-components/GenericIndicatorOption";

interface TraceProps {
    trace: {
        id: number,
        name: string,
        plotType: string,
        plotIndicator: string,
        markerColour: string,
        orientation: string
    }
}

export const Trace = (props : TraceProps) => {

    var trimmedIndicator = props.trace.plotIndicator.split('/').pop();
    console.log("trimmed" + trimmedIndicator)

    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName={`Trace ${props.trace.id} - ${props.trace.name}`} />
            <div className="flex flex-col gap-y-1">
                < GenericPlotTypeOption contentOnRender={props.trace.plotType}/>
                <div className="self-center bg-[#d6d6d6] h-[2px] w-[90%] rounded-xl my-2"></div>
                < GenericIndicatorOption contentOnRender={trimmedIndicator} labelName="Indicator" displayLabel={true}/>
            </div>
        </div>
    )
}