import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"

export const PlotMarginOption = () => {

    const changePlotMarginColour = (inputValue: string) => {
        // Enter logic here for changing of Plot Margin Colour
        console.log("Plot Margin Colour Changed to " + inputValue);
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Plot Margin Colour" />
            <GenericColourOption plotFunction={changePlotMarginColour} labelName="" displayLabel={false} />
        </div>
    )
}