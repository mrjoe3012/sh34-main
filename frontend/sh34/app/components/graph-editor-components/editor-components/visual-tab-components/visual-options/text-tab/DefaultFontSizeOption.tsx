import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericFontSizeOption } from "../../../generic-labelling-components/GenericFontSizeOption";
import Image from 'next/image';
import uptriangle from '@app/images/uptriangle.png'
import downtriangle from '@app/images/downtriangle.png'

export const FontSizeOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Font Size" />
            < GenericFontSizeOption displayLabel={false} />
        </div>
    )
}