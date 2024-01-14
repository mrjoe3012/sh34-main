import { useState } from "react"

import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { YAxisLabelDefaultMode } from "./YAxisLabelDefaultMode"
import { YAxisLabelCustomMode } from "./YAxisLabelCustomMode"

import { TwoTabSwitcher } from "../../../GenericTwoTabSwitcher"

export const YAxisLabelOption = () => {

    const [xaxisOptionMode, setXAxisOptionMode] = useState(<YAxisLabelDefaultMode />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Y-Axis Label Options" />
                <TwoTabSwitcher switchTabFunction={setXAxisOptionMode}
                                firstTabContent={<YAxisLabelDefaultMode />}
                                secondTabContent={<YAxisLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom" />
                {xaxisOptionMode}
        </div>
    )
}