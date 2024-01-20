import { useConfig } from "@app/graph-editor/ConfigContext";

interface Trace {
    id: number;
    name: string;
    plotType: string;
    plotIndicator: string;
    markerColour: string;
    orientation: string;
}

export const NewTraceButton = () => {

    const {config,setConfig} = useConfig()

    const addTrace = () => {
        const newTrace: Trace = {
            id: config["traces"].length, 
            name: "New Trace",
            plotType: 'Scatter', 
            plotIndicator: '/breakdown_by_indicator/TemperatureMean',
            markerColour: "",
            orientation: "v"
        };

        // Create a new array of traces with the newTrace added
        const updatedTraces = [...config.traces, newTrace];

        // Create a new config object with the updated traces array
        const newConfig = {
            ...config,
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