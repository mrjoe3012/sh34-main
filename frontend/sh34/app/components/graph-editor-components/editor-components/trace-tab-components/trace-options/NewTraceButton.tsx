import configjson from "../../../../../config.json"

interface Trace {
    id: number;
    name: string;
    plotType: string;
    plotIndicator: string;
    markerColour: string;
    orientation: string;
}

export const NewTraceButton = () => {

    const addTrace = () => {
        const newTrace: Trace = {
        id: configjson["traces"].length, 
        name: "New Trace",
        plotType: 'Bar', 
        plotIndicator: '/breakdown_by_indicator/Production',
        markerColour: "",
        orientation: "v"
        };
        configjson["traces"] = [...configjson["traces"], newTrace]
    }

    return(
        <div className="ml-3 mr-3 h-[35px] bg-[#346DFF] text-white border-[1px] border-black rounded flex items-center mb-2">
            <button onClick={addTrace} className={`w-[50%] flex-grow text-center h-full rounded }`} > Add Trace </button>
        </div>
    )
}