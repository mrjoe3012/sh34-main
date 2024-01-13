import { GenericTextInputOption } from "../../../generic-labelling-components/GenericTextInputOption"
import { GenericSizeIncrementerOption } from "../../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const YAxisLabelCustomMode = () => {

    const changeYAxisLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Font Colour
        console.log("Y-Axis Label Font Colour Changed to " + inputValue);
    }

    return(
        <div className="flex flex-col gap-y-1">
            
            <GenericSizeIncrementerOption labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption plotFunction={changeYAxisLabelFontColour} labelName="Colour" displayLabel={true} />
            <GenericTypefaceOption displayLabel={true}/>
        </div>
    )
}