import { TraceTabBarOptions } from "./TraceTabBarOptions"
import { TraceTabScatterOptions } from "./TraceTabScatterOptions"

export const VisualTraceTab = () => {
    
    // Display Either Bar Options, Scatter Options, Pie Options depending on the type of plot currently selected
    return(
        <div>
            <TraceTabScatterOptions />
        </div>
    )
}