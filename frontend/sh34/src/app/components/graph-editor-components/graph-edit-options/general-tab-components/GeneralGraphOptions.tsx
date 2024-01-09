import { OptionTabTitle } from "../OptionTabTitle"
import { PlotTypeOption } from "../option-components/PlotTypeOption"
import { PlotSizeOption } from "../option-components/PlotSizeOption"
import { AxisLineOption } from "../option-components/AxisLineOption"
import { IndicatorOption } from "../option-components/IndicatorOption"


export const GeneralGraphOptions = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="General Options" />
            
            <div className="flex flex-col items-center w-full">
                <PlotTypeOption />
                <IndicatorOption />
                <PlotSizeOption />
                <AxisLineOption />
            </div>
        </div>
    )
}