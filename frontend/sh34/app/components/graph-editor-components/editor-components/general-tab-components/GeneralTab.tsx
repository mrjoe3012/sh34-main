import { OptionTabTitle } from "../OptionTabTitle"
import { PlotSizeOption } from "./general-options/PlotSizeOption"
import { AxisLineOption } from "./general-options/AxisLineOption"
import { OrientationOption } from "./general-options/OrientationOption"
import { AxisScaleOption } from "./general-options/AxisScalesOption"
import { PlotColourOption } from "./general-options/PlotColourOption"
import { PlotMarginOption } from "./general-options/PlotMarginColour"

export const GeneralTab = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="General Options" />
            
            <div className="w-full flex flex-col gap-y-5">
                <PlotSizeOption />
                <PlotColourOption />
                <PlotMarginOption />
            </div>
        </div>
    )
}