import { useState } from "react"

import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTextInputOption } from "../../../generic-labelling-components/GenericTextInputOption"
import { TitleLabelDefaultMode } from "./TitleLabelDefaultMode"
import { TitleLabelCustomMode } from "./TitleLabelCustomMode"
import { TwoTabSwitcher } from "../../../GenericTwoTabSwitcher"

export const TitleLabelOptions = () => {

    const [titleOptionMode, setTitleOptionMode] = useState(<TitleLabelDefaultMode />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Title Label Options" />
                <div className="mb-2"><GenericTextInputOption placeholder="" labelName={"Text"} displayLabel={true} /></div>
                <div className="mx-3"><OptionComponentTitle optionName="Font Options" /></div>
                <TwoTabSwitcher switchTabFunction={setTitleOptionMode}
                                firstTabContent={<TitleLabelDefaultMode />} 
                                secondTabContent={<TitleLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"/>
                {titleOptionMode}
        </div>
    )
}