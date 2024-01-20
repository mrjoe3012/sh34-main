import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { MarkerColourTabSwitcher } from "./MarkerColourTabSwitcher";
import { useState } from 'react';
import { MarkerConstantOption } from "./MarkerConstantOption";

interface MarkerColourOptionProps {
    trace: {
        id: number,
        name: string,
        plotType: string,
        plotIndicator: string,
        markerColour: string,
        orientation: string
    }
    plotFunctionConstant: (inputValue: string) => void;
    plotFunctionScale: (inputValue: string) => void;
}

export const MarkerColourOption = (props: MarkerColourOptionProps) => {

    const [datapointTabContent, setDataPointTabContent] = useState(<MarkerConstantOption trace={props.trace} plotFunction={props.plotFunctionConstant}/>)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Marker Colour" />
            <MarkerColourTabSwitcher plotFunctionConstant={props.plotFunctionConstant} plotFunctionScale={props.plotFunctionScale} switchTabFunction={setDataPointTabContent}/>
            <div className="ml-2"> {datapointTabContent} </div>
        </div>
    )
}