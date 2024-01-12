import { GenericTextInputOption } from "../../../generic-labelling-components/GenericTextInputOption"
import { GenericSizeIncrementerOption } from "../../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const TitleLabelCustomMode = () => {
    return (
        <div className="flex flex-col gap-y-1">
            <GenericTextInputOption placeholder="" labelName={"Text"} displayLabel={true} />
            <GenericSizeIncrementerOption labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption displayLabel={true}/>
            <GenericTypefaceOption displayLabel={true}/>
        </div>
    )
}