import { OptionComponentTitle } from "../../../../OptionComponentTitle"
import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericSizeIncrementerOption"

export const BarWidthOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Bar Width" />
            <GenericSizeIncrementerOption labelName="" displayLabel={false} />
        </div>
    )
}