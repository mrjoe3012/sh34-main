import Image from "next/image"
import InfoIcon from '@app/images/info-icon.png' 

export const TitleLabelDefaultMode = () => {
    return(
        <div className="ml-3 mt-3 flex gap-x-1">
            <Image className="w-4 h-4 mt-[3px]" src={InfoIcon} alt="infoicon"></Image>
            <p className="">Using Default Font Options</p>
        </div>
    )
}