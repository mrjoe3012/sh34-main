import { useState } from "react"
import { OptionComponentTitle } from "../../OptionComponentTitle"
import { TwoTabSwitcher } from "../../GenericTwoTabSwitcher"
import { GenericTextInputOption } from "../../generic-labelling-components/GenericTextInputOption"
import { GenericSizeIncrementerOption } from "../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../generic-labelling-components/GenericColourOption"
import { AnnotationLineOptions } from "./AnnotationLineOptions"

export const Annotation = () => {

    const [showArrowOptions, setShowArrowOptions] = useState(<div></div>);

    const changeAnnotationFontColour = (inputValue: string) => {
        // Enter logic for changing the annotation's font colour 
        console.log("Changed Annotation Font Colour to " + inputValue);
    }

    const changeAnnotationXPos = (inputValue: string) => {
        // Enter logic for changing the annotation's x pos
        console.log("Changed Annotation X Pos to " + inputValue);
    }

    const changeAnnotaionYPos = (inputValue: string) => {
        // Enter logic for changing annotations y pos
        console.log("Changed Annotation Y Pos to " + inputValue);
    }

    const changeAnnotationFontSize = (inputValue: string) => {
        // Enter logic for changing annotation font size
        console.log("Changed annotation font size to " + inputValue);
    }

    const changeAnnotationText = (inputValue: string) => {
        // Enter logic for changing annotation text
        console.log("Changed annotation text to " + inputValue);
    }

    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Annotation 1" />
            <div className="mt-3 flex flex-col gap-y-1">
                < GenericTextInputOption plotFunction={changeAnnotationText} placeholder="Annotation Text" labelName="Text" displayLabel={true} />
                < GenericSizeIncrementerOption plotFunction={changeAnnotationXPos} labelName="X-Pos" displayLabel={true} />
                < GenericSizeIncrementerOption plotFunction={changeAnnotaionYPos} labelName="Y-Pos" displayLabel={true} />
                < GenericSizeIncrementerOption plotFunction={changeAnnotationFontSize} labelName="Font Size" displayLabel={true} />
                < GenericColourOption plotFunction={changeAnnotationFontColour} labelName="Colour" displayLabel={true} />
                <div className="mx-3"><OptionComponentTitle optionName="Arrow Settings" /></div>
                <TwoTabSwitcher switchTabFunction={setShowArrowOptions} firstTabContent={<div></div>} secondTabContent={<AnnotationLineOptions />} switcherLabel1="Hide" switcherLabel2="Show" />
                {showArrowOptions}
            </div>
        </div>
    )
}