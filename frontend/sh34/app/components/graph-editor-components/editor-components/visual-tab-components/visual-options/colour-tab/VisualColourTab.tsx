import { PlotColourOption } from "../../../general-tab-components/general-options/PlotColourOption"
import { PlotMarginOption } from "../../../general-tab-components/general-options/PlotMarginColour"

export const VisualColourTab = () => {
    
    return(
        <div className="flex flex-col gap-y-5">
            <PlotColourOption />
            <PlotMarginOption />
        </div>
    )
}