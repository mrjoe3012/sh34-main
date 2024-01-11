import { OptionComponentTitle } from "../OptionComponentTitle"
import { ScatterPointSizeTabSwitcher } from "./ScatterPointSizeTabSwitcher";
import { ScatterPointSizeConstantOption } from "./ScatterPointSizeConstantOption";
import { useState } from 'react';


export const ScatterPointSizeOption = () => {

    const [pointSizeSetting, setPointSizeSetting] = useState(<ScatterPointSizeConstantOption />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Point Size" />
            <ScatterPointSizeTabSwitcher switchTabFunction={setPointSizeSetting}/>
            <div className="ml-2"> {pointSizeSetting} </div>
        </div>
    )
}