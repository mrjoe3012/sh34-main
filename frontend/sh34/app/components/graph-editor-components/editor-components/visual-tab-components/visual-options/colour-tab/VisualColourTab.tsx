import { PlotColourOption } from "./PlotColourOption"
import { PlotMarginOption } from "./PlotMarginColour"

export const VisualColourTab = () => {
    
    return(
        <div className="flex flex-col gap-y-5">
            <PlotColourOption />
            <PlotMarginOption />
        </div>
    )
}