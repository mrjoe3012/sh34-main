import { useState } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { TitleLabelDefaultMode } from "./TickLabelDefaultMode"
import { TickLabelCustomMode } from "./tick-label-custom-mode/TickLabelCustomMode"
import { TwoTabSwitcher } from "../../../GenericTwoTabSwitcher"

export const TickLabelOption = () => {

    const [tickLabelOptionMode, setTickLabelOptionMode] = useState(<TitleLabelDefaultMode />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Tick Label Options" />
            <TwoTabSwitcher switchTabFunction={setTickLabelOptionMode}
                                firstTabContent={<TitleLabelDefaultMode />} 
                                secondTabContent={<TickLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"/>
            {tickLabelOptionMode}
        </div>
    )
}