import { OptionTabTitle } from "../OptionTabTitle"
import { TitleLabelOptions } from "./labelling-options/title-label-components/TitleLabelOptions"
import { XAxisLabelOption } from "./labelling-options/xaxis-label-components/XAxisLabelOption"
import { YAxisLabelOption } from "./labelling-options/yaxis-label-components/YAxisLabelOption"
import { TickLabelOption } from "./labelling-options/tick-label-components/TickLabelOptions"

export const LabellingTab = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="Labelling Options" />
            
            <div className="w-full flex flex-col gap-y-5 pb-10">
                <TitleLabelOptions />
                <XAxisLabelOption />
                <YAxisLabelOption />
                <TickLabelOption />
            </div>
        </div>
    )
}