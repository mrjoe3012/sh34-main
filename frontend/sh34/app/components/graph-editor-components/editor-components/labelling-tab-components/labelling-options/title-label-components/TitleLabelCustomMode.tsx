import { GenericSizeIncrementerOption } from "../../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const TitleLabelCustomMode = () => {

    const changeTitleLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of title font colour
        console.log("Title Font Colour Changed to " + inputValue);
    }

    const changeTitleLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of title font size
        console.log("Title Font Size Changed to " + inputValue);
    }

    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption plotFunction={changeTitleLabelFontSize} labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption plotFunction={changeTitleLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption displayLabel={true}/>
        </div>
    )
}