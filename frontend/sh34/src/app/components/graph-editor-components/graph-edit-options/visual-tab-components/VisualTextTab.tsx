
import { FontColourOption } from "../option-components/FontColourOption"
import { FontSizeOption } from "../option-components/FontSizeOption"
import { FontTypefaceOption } from "../option-components/FontTypefaceOption"

export const VisualTextTab = () => {
    
    return(
        <div className="">
            <FontColourOption />
            <FontSizeOption />
            <FontTypefaceOption />
        </div>
    )
}