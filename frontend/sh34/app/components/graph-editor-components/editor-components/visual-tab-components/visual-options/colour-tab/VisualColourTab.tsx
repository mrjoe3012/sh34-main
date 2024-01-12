import { PlotColourOption } from "./PlotColourOption"
import { DataPointColourOption } from "./datapoint-colour-components/DataPointColourOption"

export const VisualColourTab = () => {
    
    return(
        <div className="flex flex-col gap-y-5">
            <PlotColourOption />
            <DataPointColourOption />
        </div>
    )
}