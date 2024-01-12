import { useState } from "react"
import { OptionComponentTitle } from "../../OptionComponentTitle"
import { TwoTabSwitcher } from "../../GenericTwoTabSwitcher"
import { GenericTextInputOption } from "../../generic-labelling-components/GenericTextInputOption"
import { GenericSizeIncrementerOption } from "../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../generic-labelling-components/GenericColourOption"
import { AnnotationLineOptions } from "./AnnotationLineOptions"

export const Annotation = () => {

    const [showArrowOptions, setShowArrowOptions] = useState(<div></div>);

    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Annotation 1" />
            <div className="mt-3 flex flex-col gap-y-1">
                < GenericTextInputOption placeholder="Annotation Text" labelName="Text" displayLabel={true} />
                < GenericSizeIncrementerOption labelName="X-Pos" displayLabel={true} />
                < GenericSizeIncrementerOption labelName="Y-Pos" displayLabel={true} />
                < GenericSizeIncrementerOption labelName="Font Size" displayLabel={true} />
                < GenericColourOption labelName="Colour" displayLabel={true} />
                <div className="mx-3"><OptionComponentTitle optionName="Arrow Settings" /></div>
                <TwoTabSwitcher switchTabFunction={setShowArrowOptions} firstTabContent={<div></div>} secondTabContent={<AnnotationLineOptions />} switcherLabel1="Hide" switcherLabel2="Show" />
                {showArrowOptions}
            </div>
        </div>
    )
}