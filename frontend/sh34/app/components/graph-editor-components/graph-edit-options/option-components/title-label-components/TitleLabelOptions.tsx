import { useState } from "react"
import { OptionComponentTitle } from "../OptionComponentTitle"

import { TitleLabelDefaultMode } from "./TitleLabelDefaultMode"

import { TitleLabelSwitcher } from "./TitleLabelSwitcher"

export const TitleLabelOptions = () => {

    const [titleOptionMode, setTitleOptionMode] = useState(<TitleLabelDefaultMode />)

    return(
        <div> 
                <OptionComponentTitle optionName="Title Options" />

                <TitleLabelSwitcher switchTabFunction={setTitleOptionMode}/>
                {titleOptionMode}

        </div>
    )
}