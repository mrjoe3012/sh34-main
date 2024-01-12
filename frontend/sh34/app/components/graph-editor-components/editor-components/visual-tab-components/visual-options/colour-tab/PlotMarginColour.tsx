import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"

export const PlotMarginOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Plot Margin Colour" />
            <GenericColourOption labelName="" displayLabel={false} />
        </div>
    )
}