import { GenericNameOption } from "../../../generic-labelling-components/GenericNameOption"
import { GenericFontSizeOption } from "../../../generic-labelling-components/GenericFontSizeOption"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const YAxisLabelCustomMode = () => {
    return(
        <div className="flex flex-col gap-y-1">
            <GenericNameOption />
            <GenericFontSizeOption displayLabel={true} />
            <GenericColourOption displayLabel={true} />
            <GenericTypefaceOption displayLabel={true}/>
        </div>
    )
}