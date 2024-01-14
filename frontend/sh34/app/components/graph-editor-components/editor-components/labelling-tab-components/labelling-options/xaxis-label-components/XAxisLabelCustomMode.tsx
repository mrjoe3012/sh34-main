import { GenericTextInputOption } from "../../../generic-labelling-components/GenericTextInputOption"
import { GenericSizeIncrementerOption } from "../../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const XAxisLabelCustomMode = () => {

    const changeXAxisLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of X Axis Label Font Colour
        console.log("X-Axis Label Font Colour Changed to " + inputValue);
    }

    const changeXAxisLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of X Axis Label Font size
        console.log("X-Axis Label Font Size Changed to " + inputValue);
    }

    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption plotFunction={changeXAxisLabelFontSize} labelName={"Font Size"} displayLabel={true}/>
            <GenericColourOption plotFunction={changeXAxisLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption displayLabel={true}/>
        </div>
    )
}