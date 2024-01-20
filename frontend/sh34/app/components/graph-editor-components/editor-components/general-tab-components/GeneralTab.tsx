import { OptionTabTitle } from "../OptionTabTitle"
import { PlotTypeOption } from "./general-options/PlotTypeOption"
import { PlotSizeOption } from "./general-options/PlotSizeOption"
import { AxisLineOption } from "./general-options/AxisLineOption"
import { IndicatorOption } from "./general-options/IndicatorOption"
import { OrientationOption } from "./general-options/OrientationOption"
import { AxisScaleOption } from "./general-options/AxisScalesOption"
import { PlotData } from "@app/modules/db"
import { WithId } from "mongodb"


export const GeneralTab = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="General Options" />
            
            <div className="w-full flex flex-col gap-y-5">
                <PlotTypeOption />
                <IndicatorOption />
                <PlotSizeOption />
                <AxisLineOption />
                <AxisScaleOption />
                <OrientationOption />
            </div>
        </div>
    )
}