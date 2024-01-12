import { GenericNameOption } from "../../../generic-labelling-components/GenericNameOption"
import { GenericFontSizeOption } from "../../../generic-labelling-components/GenericFontSizeOption"
import { GenericFontColourOption } from "../../../generic-labelling-components/GenericFontColourOption"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const TitleLabelCustomMode = () => {
    return (
        <div className="flex flex-col gap-y-1">
            <GenericNameOption />
            <GenericFontSizeOption displayLabel={true} />
            <GenericFontColourOption displayLabel={true}/>
            <GenericTypefaceOption displayLabel={true}/>
        </div>
    )
}