import { TraceTabBarOptions } from "./bar-options/TraceTabBarOptions"
import { TraceTabScatterOptions } from "./scatter-options/TraceTabScatterOptions"
import { TabDisclaimer } from "../../TabDisclaimer"

export const VisualTraceTab = () => {
    
    // Display Either Bar Options, Scatter Options, Pie Options depending on the type of plot currently selected
    return(
        <div>
            <TabDisclaimer plotTypeSelected="Scatter Plot"/>
            <TraceTabScatterOptions />
        </div>
    )
}