
import { FontColourOption } from "../option-components/FontColourOption"
import { FontSizeOption } from "../option-components/FontSizeOption"
import { FontTypefaceOption } from "../option-components/FontTypefaceOption"

export const VisualTextTab = () => {
    
    return(
        <div className="flex flex-col gap-y-7">
            <FontColourOption />
            <FontSizeOption />
            <FontTypefaceOption />
        </div>
    )
}