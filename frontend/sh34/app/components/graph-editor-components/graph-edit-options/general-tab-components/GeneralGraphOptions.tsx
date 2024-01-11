import { OptionTabTitle } from "../OptionTabTitle"
import { PlotTypeOption } from "../option-components/PlotTypeOption"
import { PlotSizeOption } from "../option-components/PlotSizeOption"
import { AxisLineOption } from "../option-components/AxisLineOption"
import { IndicatorOption } from "../option-components/IndicatorOption"

interface GeneralGraphOptionsProps {
    setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
    setSelectedPlotType: React.Dispatch<React.SetStateAction<string>>;
};

export const GeneralGraphOptions = (props: GeneralGraphOptionsProps) => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="General Options" />
            
            <div className="w-full flex flex-col gap-y-5">
                <PlotTypeOption setSelectedPlotType={props.setSelectedPlotType} />
                <IndicatorOption setSelectedIndicator={props.setSelectedIndicator} />
                <PlotSizeOption />
                <AxisLineOption />
            </div>
        </div>
    )
}