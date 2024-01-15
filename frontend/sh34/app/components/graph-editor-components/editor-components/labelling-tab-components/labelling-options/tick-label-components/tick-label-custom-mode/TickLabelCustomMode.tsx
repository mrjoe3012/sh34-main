import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericColourOption"
import { GenericTypefaceOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTypefaceOption"
import { TickLabelAngleOption } from "./TickLabelAngleOption"
import { TickLabelPositionOption } from "./TickLabelPositionOption"

export const TickLabelCustomMode = () => {

    const changeTickLabelFontColour = (inputValue: string) => {
        // Enter logic for changing the tick label font colour here
        console.log("Tick Label Font Colour changed to " + inputValue); 
    }

    const changeTickLabelFontSize = (inputValue: string) => {
        // Enter logic for changing the tick label font size
        console.log("Tick Label Font Size changed to " + inputValue); 
    }

    const changeTickLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the tick label typeface
        console.log("Tick Label Typeface changed to " + inputValue);  
    }

    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption plotFunction={changeTickLabelFontSize} labelName={"Font Size"} displayLabel={true}/>
            <GenericColourOption plotFunction={changeTickLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption plotFunction={changeTickLabelTypeface} displayLabel={true}/>
            <TickLabelAngleOption />
            <TickLabelPositionOption />
        </div>
    )
}