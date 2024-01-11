import { OptionComponentTitle } from "../OptionComponentTitle"
import { TitleNameOption } from "./TitleNameOption"
import { TitleFontSizeOption } from "./TitleFontSizeOption"
import { TitleFontColourOption } from "./TitleFontColourOption"
import { TitleTypefaceOption } from "./TitleTypefaceOption"

export const TitleLabelOptions = () => {
    return(
        <div> 
                <OptionComponentTitle optionName="Title Options" />
                <div className="ml-3 mr-3 flex flex-col gap-y-1">
                    <TitleNameOption />
                    <TitleFontSizeOption />
                    <TitleFontColourOption />
                    <TitleTypefaceOption />
                </div>
                    
        </div>
    )
}