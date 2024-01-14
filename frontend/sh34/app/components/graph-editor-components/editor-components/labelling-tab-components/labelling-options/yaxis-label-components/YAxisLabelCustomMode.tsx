import { GenericSizeIncrementerOption } from "../../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const YAxisLabelCustomMode = () => {

    const changeYAxisLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Font Colour
        console.log("Y-Axis Label Font Colour Changed to " + inputValue);
    }

    const changeYAxisLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Font Size
        console.log("Y-Axis Label Font Size Changed to " + inputValue);
    }

    const changeYAxisLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the YAxis label typeface
        console.log("YAxis Label Typeface changed to " + inputValue);  
    }

    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption plotFunction={changeYAxisLabelFontSize} labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption plotFunction={changeYAxisLabelFontColour} labelName="Colour" displayLabel={true} />
            <GenericTypefaceOption plotFunction={changeYAxisLabelTypeface} displayLabel={true}/>
        </div>
    )
}