import { OptionTabTitle } from "../OptionTabTitle"
import { PlotTypeOption } from "./general-options/PlotTypeOption"
import { PlotSizeOption } from "./general-options/PlotSizeOption"
import { AxisLineOption } from "./general-options/AxisLineOption"
import { IndicatorOption } from "./general-options/IndicatorOption"
import { PlotData } from "@app/modules/db"
import { WithId } from "mongodb"

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
            </div>
        </div>
    )
}