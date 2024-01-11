import { OptionTabTitle } from "../OptionTabTitle"
import { TitleLabelOptions } from "../option-components/TitleLabelOptions"
import { XAxisLabelOption } from "../option-components/XAxisLabelOption"
import { YAxisLabelOption } from "../option-components/YAxisLabelOption"

export const LabellingGraphOptions = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="Labelling Options" />
            
            <div className="w-full flex flex-col gap-y-7">
                <TitleLabelOptions />
                <XAxisLabelOption />
                <YAxisLabelOption />
            </div>
        </div>
    )
}