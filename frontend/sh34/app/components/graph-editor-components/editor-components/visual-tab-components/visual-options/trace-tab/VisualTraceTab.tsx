import { TraceTabBarOptions } from "./bar-options/TraceTabBarOptions"
import { TraceTabScatterOptions } from "./scatter-options/TraceTabScatterOptions"
import { TabDisclaimer } from "./TabDisclaimer"
import { useContext } from "react";
import { PlotOptionsContext } from "@app/graph-editor/PlotOptionsContext";

export const VisualTraceTab = () => {
    
    const {plotType} = useContext(PlotOptionsContext);

    // Display Either Bar Options, Scatter Options, Pie Options depending on the type of plot currently selected
    return(
        <div>
            <TabDisclaimer />
            {plotType === "bar" && <TraceTabBarOptions />}
            {plotType === "scatter" && <TraceTabScatterOptions />}
        </div>
    )
}