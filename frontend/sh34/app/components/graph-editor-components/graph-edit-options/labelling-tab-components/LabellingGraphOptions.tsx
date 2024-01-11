import { OptionTabTitle } from "../OptionTabTitle"
import { TitleLabelOptions } from "../option-components/title-label-components/TitleLabelOptions"
import { XAxisNameOption } from "../option-components/XAxisNameOption"
import { YAxisNameOption } from "../option-components/YAxisNameOption"

export const LabellingGraphOptions = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="Labelling Options" />
            
            <div className="w-full flex flex-col gap-y-7">
                <TitleLabelOptions />
                <XAxisNameOption />
                <YAxisNameOption />
            </div>
        </div>
    )
}