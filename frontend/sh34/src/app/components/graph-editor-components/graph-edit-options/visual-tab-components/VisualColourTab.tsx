import { PlotColourOption } from "../option-components/PlotColourOption"
import { DataPointColourOption } from "../option-components/datapoint-colour-components/DataPointColourOption"

export const VisualColourTab = () => {
    
    return(
        <div className="flex flex-col gap-y-5">
            <PlotColourOption />
            <DataPointColourOption />
        </div>
    )
}