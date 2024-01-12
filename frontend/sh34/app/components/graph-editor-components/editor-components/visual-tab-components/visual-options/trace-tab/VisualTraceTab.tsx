import { TraceTabBarOptions } from "./bar-options/TraceTabBarOptions"
import { TraceTabScatterOptions } from "./scatter-options/TraceTabScatterOptions"
import { TabDisclaimer } from "./TabDisclaimer"
import { useContext } from "react";
import { PlotTypeContext } from "@app/graph-editor/page";

export const VisualTraceTab = () => {
    
    const {plotType} = useContext(PlotTypeContext);

    // Display Either Bar Options, Scatter Options, Pie Options depending on the type of plot currently selected
    return(
        <div>
            <TabDisclaimer />
            {plotType === "Bar" && <TraceTabBarOptions />}
            {plotType === "Scatter" && <TraceTabScatterOptions />}
        </div>
    )
}