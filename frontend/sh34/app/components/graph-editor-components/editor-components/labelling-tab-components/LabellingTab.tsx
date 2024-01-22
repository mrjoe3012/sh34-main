import { OptionTabTitle } from "../OptionTabTitle"
import { TitleLabelOptions } from "./labelling-options/title-label-components/TitleLabelOptions"
import { XAxisLabelOption } from "./labelling-options/xaxis-label-components/XAxisLabelOption"
import { YAxisLabelOption } from "./labelling-options/yaxis-label-components/YAxisLabelOption"
import { XAxisTickLabelOption } from "./labelling-options/xaxis-ticklabel-components/XAxisTickLabelOptions"
import { YAxisTickLabelOption } from "./labelling-options/yaxis-ticklabel-components/YAxisTickLabelOptions"

export const LabellingTab = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="Labelling Options" />
            
            <div className="w-full flex flex-col gap-y-5 pb-5">
                <TitleLabelOptions />
                <XAxisLabelOption />
                <YAxisLabelOption />
                <XAxisTickLabelOption />
                <YAxisTickLabelOption />
            </div>
        </div>
    )
}