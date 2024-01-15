import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"

export const PlotColourOption = () => {

    const changePlotBackgroundColour = (inputValue: string) => {
        // Enter logic here for changing of Plot Background Colour
        console.log("Plot Background Colour Changed to " + inputValue);
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Plot Background Colour" />
            <GenericColourOption plotFunction={changePlotBackgroundColour} labelName="" displayLabel={false} />
        </div>
    )
}