import { PlotTypeOption } from "../option-components/PlotTypeOption"
import { PlotSizeOption } from "../option-components/PlotSizeOption"
import { AxisLineOption } from "../option-components/AxisLineOption"
import { IndicatorOption } from "../option-components/IndicatorOption"

export const GeneralGraphOptions = () => {
    return(
        <div>
            <PlotTypeOption />
            <IndicatorOption />
            <PlotSizeOption />
            <AxisLineOption />
        </div>
    )
}