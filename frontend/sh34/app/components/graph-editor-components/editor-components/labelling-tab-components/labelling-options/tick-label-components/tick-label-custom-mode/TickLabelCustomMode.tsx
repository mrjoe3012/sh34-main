import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericTypefaceOption"
import { TickLabelAngleOption } from "./TickLabelAngleOption"
import { TickLabelPositionOption } from "./TickLabelPositionOption"

export const TickLabelCustomMode = () => {

    const changeTickLabelFontColour = (inputValue: string) => {
        // Enter logic for changing the tick label font colour here
        console.log("Tick Label Font Colour changed to " + inputValue); 
    }

    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption labelName={"Font Size"} displayLabel={true}/>
            <GenericColourOption plotFunction={changeTickLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption displayLabel={true}/>
            <TickLabelAngleOption />
            <TickLabelPositionOption />
        </div>
    )
}