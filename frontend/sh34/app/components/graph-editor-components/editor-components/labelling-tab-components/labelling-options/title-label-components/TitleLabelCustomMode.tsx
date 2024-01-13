import { GenericTextInputOption } from "../../../generic-labelling-components/GenericTextInputOption"
import { GenericSizeIncrementerOption } from "../../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const TitleLabelCustomMode = () => {

    const changeTitleLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of title font colour
        console.log("Title Font Colour Changed to " + inputValue);
    }

    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption plotFunction={changeTitleLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption displayLabel={true}/>
        </div>
    )
}