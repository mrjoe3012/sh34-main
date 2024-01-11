import { OptionTabTitle } from "../OptionTabTitle"
import { TitleNameOption } from "../option-components/TitleNameOption"
import { XAxisNameOption } from "../option-components/XAxisNameOption"

export const LabellingGraphOptions = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="Labelling Options" />
            
            <div className="w-full flex flex-col gap-y-7">
                <TitleNameOption />
                <XAxisNameOption />
            </div>
        </div>
    )
}