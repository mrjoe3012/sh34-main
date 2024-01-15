import { PlotColourOption } from "./PlotColourOption"
import { PlotMarginOption } from "./PlotMarginColour"
import { DataPointColourOption } from "./datapoint-colour-components/DataPointColourOption"

export const VisualColourTab = () => {
    
    return(
        <div className="flex flex-col gap-y-5">
            <PlotColourOption />
            <PlotMarginOption />
            <DataPointColourOption />
        </div>
    )
}