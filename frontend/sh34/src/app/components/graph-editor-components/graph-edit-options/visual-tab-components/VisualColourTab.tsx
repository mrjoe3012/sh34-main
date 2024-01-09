import { PlotColourOption } from "../option-components/PlotColourOption"
import { DataPointColourOption } from "../option-components/DataPointColourOption"

export const VisualColourTab = () => {
    
    return(
        <div>
            <PlotColourOption />
            <DataPointColourOption />
        </div>
    )
}