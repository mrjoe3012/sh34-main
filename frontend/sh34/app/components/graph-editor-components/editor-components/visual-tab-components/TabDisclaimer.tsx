import Image from "next/image"
import InfoIcon from '@app/images/info-icon.png'

interface TabDisclaimerProps {
    plotTypeSelected: string;
}

export const TabDisclaimer = (props : TabDisclaimerProps) => {
    return(
        <div className="ml-3 mt-[-20px] mb-4 flex gap-x-1">
            <Image className="w-4 h-4 mt-[2px] mr-1" src={InfoIcon} alt="infoicon"></Image>
            <p className="">Showing {props.plotTypeSelected} Options</p>
        </div>
    )
}