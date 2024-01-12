import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericTextInputOption } from "../../generic-labelling-components/GenericTextInputOption"
import { GenericSizeIncrementerOption } from "../../generic-labelling-components/GenericSizeIncrementerOption"

export const Annotation = () => {
    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Annotation 1" />
            <div className="ml-3 mt-3 flex flex-col gap-y-1">
                < GenericTextInputOption placeholder="Annotation Label" labelName="Text" displayLabel={true} />
                < GenericSizeIncrementerOption labelName="X-Pos" displayLabel={true} />
                < GenericSizeIncrementerOption labelName="Y-Pos" displayLabel={true} />
            </div>
        </div>
    )
}