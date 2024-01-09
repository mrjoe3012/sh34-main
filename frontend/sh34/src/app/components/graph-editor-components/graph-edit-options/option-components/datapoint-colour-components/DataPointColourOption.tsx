import { OptionComponentTitle } from "../OptionComponentTitle"
import { DataPointColourTabSwitcher } from "./DataPointColourTabSwitcher";
import { useState } from 'react';
import { DataPointConstantOption } from "./DataPointConstantOption";

export const DataPointColourOption = () => {

    const [datapointTabContent, setDataPointTabContent] = useState(<DataPointConstantOption />)

    return(
        <div className="mb-5">
            <OptionComponentTitle optionName="Data Point Colour Theme" />
            <DataPointColourTabSwitcher switchTabFunction={setDataPointTabContent}/>
            <div className="ml-2"> {datapointTabContent}</div>
        </div>
    )
}