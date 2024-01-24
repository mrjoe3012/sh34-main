import { OptionComponentTitle } from "@app/components/graph-editor-components/editor-components/OptionComponentTitle"
import { GenericPlotTypeOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericPlotTypeOption";
import { GenericIndicatorOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericIndicatorOption";
import { GenericTextInputOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTextInputOption";
import { useConfig } from "@app/graph-editor/ConfigContext";
import { MarkerConstantOption } from "@app/components/graph-editor-components/editor-components/trace-tab-components/trace-options/marker-colour-components/MarkerConstantOption";
import Image from "next/image";
import TrashIcon from "@app/images/trash-icon.svg"
import { TraceType } from "@app/graph-editor/configjsoninterface";

interface TraceProps {
    trace: TraceType
}

export const Trace = (props : TraceProps) => {

    const {config,setConfig} = useConfig()

    const changeTraceName = (inputValue: string) => {

        if (inputValue=="") { return }

        if (config && Array.isArray(config.traces)) {
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
    }

    const changeTraceType = (newType: string) => {
        if (config && Array.isArray(config.traces)) {
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
        }
    };

    const changeTraceIndicator = (newIndicator: string) => {
        // Need to add this prefix as the value from the select is just the indicator, but the configJSON takes in "/breakdown_by_indicator/indicator"
        newIndicator = "/breakdown_by_indicator/" + newIndicator 
        if (config && Array.isArray(config.traces)) {
            const updatedTraces = config.traces.map(trace => {
                if (trace.id === props.trace.id) {
                    return { ...trace, plotIndicator: newIndicator }; 
                }
                return trace;
            });
    
            setConfig({
                ...config,
                traces: updatedTraces
            });
        }
    };

    const changeMarkerColourConstant = (inputValue: string) => {
        if (config && Array.isArray(config.traces)) {
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
        }
    };

    const changeMarkerColourScale = (inputValue: string) => {

    }

    const deleteTrace = () => {
        if (config && Array.isArray(config.traces)) {
            // Filter out the trace with the id you want to delete
            const updatedTraces = config.traces.filter(trace => trace.id !== props.trace.id);

            // Update the config with the new traces array
            setConfig({
                ...config,
                traces: updatedTraces
            });
        }
    };

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
                < GenericIndicatorOption plotFunction={changeTraceIndicator} contentOnRender={props.trace.plotIndicator} labelName="Indicator" displayLabel={true}/>
                < MarkerConstantOption trace={props.trace} plotFunction={changeMarkerColourConstant} />
            </div>
        </div>
    )
}