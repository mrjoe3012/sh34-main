import { OptionComponentTitle } from "../../../../OptionComponentTitle"
import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericSizeIncrementerOption"

export const BarWidthOption = () => {
    
    const changeBarBorderWidth = (inputValue: string) => {
        // Enter logic here for changing of Bar Border Width
        console.log("Bar Border Width Changed to " + inputValue);
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Bar Width" />
            <GenericSizeIncrementerOption plotFunction={changeBarBorderWidth} labelName="" displayLabel={false} />
        </div>
    )
}