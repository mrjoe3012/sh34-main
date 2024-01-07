import { PlotTypeOption } from "./option-components/PlotTypeOption"
import { PlotSizeOption } from "./option-components/PlotSizeOption"
import { AxisLineOption } from "./option-components/AxisLineOption"

export const GeneralGraphOptions = () => {
    return(
        <div>
            <PlotTypeOption />
            <PlotSizeOption />
            <AxisLineOption />
        </div>
    )
}