import Image from "next/image"
import InfoIcon from '@app/images/info-icon.png'
import { useContext } from "react";
import { PlotTypeContext } from "@app/graph-editor/PlotTypeContext";

export const TabDisclaimer = () => {

    // Take the plotType value from the PlotTypeContext so it can be displayed in the disclaimer
    const {plotType} = useContext(PlotTypeContext);

    return(
        <div className="ml-3 mt-[-20px] mb-4 flex gap-x-1">
            <Image className="w-4 h-4 mt-[2px] mr-1" src={InfoIcon} alt="infoicon"></Image>
            <p className="">Showing {plotType} Plot Options</p>
        </div>
    )
}