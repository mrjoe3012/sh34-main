import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"

export const PlotColourOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Plot Colour" />
            < GenericColourOption displayLabel={false} />
        </div>
    )
}