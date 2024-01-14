import { useState } from "react"

import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { XAxisLabelDefaultMode } from "./XAxisLabelDefaultMode"
import { XAxisLabelCustomMode } from "./XAxisLabelCustomMode"

import { TwoTabSwitcher } from "../../../GenericTwoTabSwitcher"

export const XAxisLabelOption = () => {

    const [xaxisOptionMode, setXAxisOptionMode] = useState(<XAxisLabelDefaultMode />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="X-Axis Label Options" />
                <TwoTabSwitcher switchTabFunction={setXAxisOptionMode}
                                firstTabContent={<XAxisLabelDefaultMode />}
                                secondTabContent={<XAxisLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom" />
                {xaxisOptionMode}
        </div>
    )
}