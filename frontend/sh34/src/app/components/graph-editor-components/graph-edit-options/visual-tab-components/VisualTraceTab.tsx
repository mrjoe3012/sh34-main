import { BarBorderOption } from "../option-components/BarBorderOption"
import { BarWidthOption } from "../option-components/BarWidthOption"

export const VisualTraceTab = () => {
    
    // Display Either Bar Options, Scatter Options, Pie Options depending on the type of plot currently selected
    return(
        <div className="flex flex-col gap-y-5">
            <BarBorderOption />
            <BarWidthOption />
        </div>
    )
}