import { useConfig } from "@app/graph-editor/ConfigContext";
import { TraceType } from "@app/modules/Config";

export const NewTraceButton = () => {

    const {config,setConfig} = useConfig()

    const addTrace = () => {
        if (config === null) return;
        const newTrace: TraceType = {
            id: config["numTraces"]+1,
            name: "New Trace",
            plotType: 'Scatter',
            plotDataX: "generator_downtimes.GeneratorName",
            plotDataY: "generator_downtimes.LostProduction",
            markerColour: "#ffac05",
            orientation: "v"
        };

        // Create a new array of traces with the newTrace added
        const updatedTraces = [...config.traces, newTrace];

        // Create a new config object with the updated traces array
        const newConfig = {
            ...config,
            numTraces: config.numTraces+1,
            traces: updatedTraces
        };

        // Update the config context with the new configuration
        setConfig(newConfig);
    }

    return(
        <div className="ml-3 mr-3 h-[35px] bg-[#346DFF] text-white border-[1px] border-black rounded flex items-center mb-2">
            <button onClick={addTrace} className={`w-[50%] flex-grow text-center h-full rounded }`} > Add Trace </button>
        </div>
    )
}