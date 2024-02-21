import { OptionComponentTitle } from "@app/components/graph-editor-components/editor-components/OptionComponentTitle"
import { GenericPlotTypeOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericPlotTypeOption";
import { GenericTextInputOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTextInputOption";
import { useConfig } from "@app/graph-editor/ConfigContext";
import { MarkerConstantOption } from "@app/components/graph-editor-components/editor-components/trace-tab-components/trace-options/marker-colour-components/MarkerConstantOption";
import Image from "next/image";
import TrashIcon from "@app/images/trash-icon.svg"
import { TraceType } from "@app/modules/Config";
import { DataPopup } from "./data-select-popup/DataPopup";
import { useState } from "react";

interface TraceProps {
    trace: TraceType
}

export const Trace = (props : TraceProps) => {

    const {config,setConfig} = useConfig()
    const [showDataPopup, setShowDataPopup] = useState(false);

    const changeTraceName = (inputValue: string) => {

        if (inputValue=="") { return }

        const updatedTraces = config.traces.map(trace => {
            if (trace.id === props.trace.id) {
                return { ...trace, name: inputValue };
            }
            return trace;
        });

        setConfig({
            ...config,
            traces: updatedTraces
        });

    }

    const changeTraceType = (newType: string) => {
        const updatedTraces = config.traces.map(trace => {
            if (trace.id === props.trace.id) {
                return { ...trace, plotType: newType };
            }
            return trace;
        });

        setConfig({
            ...config,
            traces: updatedTraces
        });
    };

    const changeMarkerColourConstant = (inputValue: string) => {
        const updatedTraces = config.traces.map(trace => {
            if (trace.id === props.trace.id) {
                return { ...trace, markerColour: "#" + inputValue };
            }
            return trace;
        });

        setConfig({
            ...config,
            traces: updatedTraces
        });
    };

    const deleteTrace = () => {
        // Filter out the trace with the id you want to delete
        const updatedTraces = config.traces.filter(trace => trace.id !== props.trace.id);

        // Update the config with the new traces array
        setConfig({
            ...config,
            traces: updatedTraces
        });
    };

    const handleDataPopupButton = () => {
        setShowDataPopup(!showDataPopup)
    }



    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <div className="flex flex-row">
                <div className="flex-grow"><OptionComponentTitle optionName={`Trace ${props.trace.id}`} /></div>
                <button onClick={deleteTrace} className="basis-[10%] ml-2"> <Image className="self-center" src={TrashIcon} alt="delete"></Image></button>
            </div>
            <div className="flex flex-col gap-y-2">
                < GenericPlotTypeOption traceID={props.trace.id} plotFunction={changeTraceType} contentOnRender={props.trace.plotType}/>
                < OptionComponentTitle optionName="Trace Settings" />
                < GenericTextInputOption placeholder="" labelName="Name" displayLabel={true} width="w-full" textPos="" plotFunction={changeTraceName} contentOnRender={props.trace.name} />
                < MarkerConstantOption trace={props.trace} plotFunction={changeMarkerColourConstant} />
                < OptionComponentTitle optionName="Trace Data" />

                <button className="bg-[#c9cacd] hover:bg-[#d8d9db] mx-4 py-2 rounded-md" onClick={handleDataPopupButton}>Open Options</button>
                {showDataPopup && <DataPopup onClose={handleDataPopupButton} trace={props.trace} />}
            </div>


        </div>
    )
}