import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericPlotTypeOption } from "../../generic-components/GenericPlotTypeOption";
import { GenericIndicatorOption } from "../../generic-components/GenericIndicatorOption";
import { GenericTextInputOption } from "../../generic-components/GenericTextInputOption";
import { useConfig } from "@app/graph-editor/ConfigContext";
import { MarkerConstantOption } from "./marker-colour-components/MarkerConstantOption";

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

    const {config,setConfig} = useConfig()

    const changeTraceName = (inputValue: string) => {
        // Ensure that traces is a proper array in your config
        if (config && Array.isArray(config.traces)) {
            // Map through the traces to find the one you want to update
            const updatedTraces = config.traces.map(trace => {
                // Check if the current trace is the one to update
                if (trace.id === props.trace.id) {
                    // If so, return a new object with the updated name
                    return { ...trace, name: inputValue };
                }
                // Otherwise, return the trace as is
                return trace;
            });

            // Update the config with the new traces array
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

    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName={`Trace ${props.trace.id}`} />
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