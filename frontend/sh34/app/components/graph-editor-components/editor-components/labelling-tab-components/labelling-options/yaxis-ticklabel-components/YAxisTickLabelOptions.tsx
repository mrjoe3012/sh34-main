import { useState } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { YAxisLabelDefaultMode } from "../yaxis-label-components/YAxisLabelDefaultMode"
import { YAxisTickLabelCustomMode } from "./yaxis-ticklabel-custom-mode/YAxisTickLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"

export const YAxisTickLabelOption = () => {

    const [xAxisTickLabelOptionMode, setXAxisTickLabelOptionMode] = useState(<YAxisLabelDefaultMode />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Y-Axis Tick Label Options" />
            <TwoTabSwitcher switchTabFunction={setXAxisTickLabelOptionMode}
                                firstTabContent={<YAxisLabelDefaultMode />} 
                                secondTabContent={<YAxisTickLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"/>
            {xAxisTickLabelOptionMode}
        </div>
    )
}