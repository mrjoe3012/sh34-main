import { OptionTabTitle } from "../OptionTabTitle"
import { PlotTypeOption } from "./general-options/PlotTypeOption"
import { PlotSizeOption } from "./general-options/PlotSizeOption"
import { AxisLineOption } from "./general-options/AxisLineOption"
import { IndicatorOption } from "./general-options/IndicatorOption"
<<<<<<< HEAD
import { OrientationOption } from "./general-options/OrientationOption"
import { AxisScaleOption } from "./general-options/AxisScalesOption"
=======
import { PlotData } from "@app/modules/db"
import { WithId } from "mongodb"
>>>>>>> 9ff7593c16ded105c02c42ee33917f834369963d

interface GeneralTabProps {
    selectedIndicator: string,
    setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
    setSelectedPlotType: React.Dispatch<React.SetStateAction<string>>;
    plot: WithId<PlotData>;
};

export const GeneralTab = (props: GeneralTabProps) => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="General Options" />
            
            <div className="w-full flex flex-col gap-y-5">
                <PlotTypeOption setSelectedPlotType={props.setSelectedPlotType} />
                <IndicatorOption plot={props.plot} selectedIndicator={props.selectedIndicator} setSelectedIndicator={props.setSelectedIndicator} />
                <PlotSizeOption />
                <AxisLineOption />
                <AxisScaleOption />
                <OrientationOption />
            </div>
        </div>
    )
}