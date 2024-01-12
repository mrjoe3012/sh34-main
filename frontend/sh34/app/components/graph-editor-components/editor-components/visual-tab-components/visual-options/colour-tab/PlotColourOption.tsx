import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericFontColourOption } from "../../../generic-labelling-components/GenericFontColourOption"

export const PlotColourOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Plot Colour" />
            < GenericFontColourOption displayLabel={false} />
        </div>
    )
}