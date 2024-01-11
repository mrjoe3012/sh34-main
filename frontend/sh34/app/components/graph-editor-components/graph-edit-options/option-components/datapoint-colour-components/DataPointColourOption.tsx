import { OptionComponentTitle } from "../OptionComponentTitle"
import { DataPointColourTabSwitcher } from "./DataPointColourTabSwitcher";
import { useState } from 'react';
import { DataPointConstantOption } from "./DataPointConstantOption";

export const DataPointColourOption = () => {

    const [datapointTabContent, setDataPointTabContent] = useState(<DataPointConstantOption />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Data Point Colour Theme" />
            <DataPointColourTabSwitcher switchTabFunction={setDataPointTabContent}/>
            <div className="ml-2"> {datapointTabContent}</div>
        </div>
    )
}