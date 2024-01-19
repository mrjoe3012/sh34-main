import { useState } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { XAxisLabelDefaultMode } from "../xaxis-label-components/XAxisLabelDefaultMode"
import { XAxisTickLabelCustomMode } from "./xaxis-ticklabel-custom-mode/XAxisTickLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"

export const XAxisTickLabelOption = () => {

    const [xAxisTickLabelOptionMode, setXAxisTickLabelOptionMode] = useState(<XAxisLabelDefaultMode />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="X-Axis Tick Label Options" />
            <TwoTabSwitcher switchTabFunction={setXAxisTickLabelOptionMode}
                                firstTabContent={<XAxisLabelDefaultMode />} 
                                secondTabContent={<XAxisTickLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"/>
            {xAxisTickLabelOptionMode}
        </div>
    )
}