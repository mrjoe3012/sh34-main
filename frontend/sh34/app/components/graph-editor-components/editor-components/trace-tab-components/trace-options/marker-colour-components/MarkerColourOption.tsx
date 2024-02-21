import { OptionComponentTitle } from "@app/components/graph-editor-components/editor-components/OptionComponentTitle"
import { MarkerColourTabSwitcher } from "@app/components/graph-editor-components/editor-components/trace-tab-components/trace-options/marker-colour-components/MarkerColourTabSwitcher";
import { useState } from 'react';
import { MarkerConstantOption } from "@app/components/graph-editor-components/editor-components/trace-tab-components/trace-options/marker-colour-components/MarkerConstantOption";
import { TraceType } from "@app/modules/Config";

interface MarkerColourOptionProps {
    trace: TraceType;
    plotFunctionConstant: (inputValue: string) => void;
    plotFunctionScale: (inputValue: string) => void;
}

export const MarkerColourOption = (props: MarkerColourOptionProps) => {

    const [datapointTabContent, setDataPointTabContent] = useState(<MarkerConstantOption trace={props.trace} plotFunction={props.plotFunctionConstant}/>)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Marker Colour" />
            <MarkerColourTabSwitcher trace={props.trace} plotFunctionConstant={props.plotFunctionConstant} plotFunctionScale={props.plotFunctionScale} switchTabFunction={setDataPointTabContent}/>
            <div className="ml-2"> {datapointTabContent} </div>
        </div>
    )
}