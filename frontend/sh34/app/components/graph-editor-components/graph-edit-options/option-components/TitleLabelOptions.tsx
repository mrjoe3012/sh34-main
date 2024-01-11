import { OptionComponentTitle } from "./OptionComponentTitle"
import { GenericNameOption } from "./generic-labelling-components/GenericNameOption"
import { GenericFontSizeOption } from "./generic-labelling-components/GenericFontSizeOption"
import { GenericFontColourOption } from "./generic-labelling-components/GenericFontColourOption"
import { GenericTypefaceOption } from "./generic-labelling-components/GenericTypefaceOption"

export const TitleLabelOptions = () => {
    return(
        <div> 
                <OptionComponentTitle optionName="Title Options" />
                <div className="ml-3 mr-3 flex flex-col gap-y-1">
                    <GenericNameOption />
                    <GenericFontSizeOption />
                    <GenericFontColourOption />
                    <GenericTypefaceOption />
                </div>
        </div>
    )
}