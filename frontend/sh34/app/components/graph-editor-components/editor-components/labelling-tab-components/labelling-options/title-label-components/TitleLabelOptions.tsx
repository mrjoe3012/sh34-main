import { useState } from "react"

import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTextInputOption } from "../../../generic-components/GenericTextInputOption"
import { TitleLabelDefaultMode } from "./TitleLabelDefaultMode"
import { TitleLabelCustomMode } from "./TitleLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"

import configjson from "../../../../../../config.json"

export const TitleLabelOptions = () => {

    const [titleOptionMode, setTitleOptionMode] = useState(<TitleLabelDefaultMode />)

    const changeTitleText = (inputValue: string) => {
        // Enter logic for changing title text

        configjson["plotTitle"] = inputValue
        console.log("Changed title text to " + inputValue);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Title Label Options" />
                <div className="mb-2"><GenericTextInputOption plotFunction={changeTitleText} placeholder="" labelName={"Text"} displayLabel={true} width="" textPos=""/></div>
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