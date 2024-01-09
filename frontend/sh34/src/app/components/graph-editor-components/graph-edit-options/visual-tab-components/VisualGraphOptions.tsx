import { VisualTabSwitcher } from "./VisualGraphOptionTabSwitcher"
import { useState } from 'react';
import { VisualTextTab } from "./VisualTextTab";
import { OptionTabTitle } from "../OptionTabTitle";

export const VisualGraphOptions = () => {
    const [visualTabContent,setVisualTabContent] = useState(<VisualTextTab />);

    return(
        <div className="w-full">
            < OptionTabTitle titleName="Visual Options" />
            <VisualTabSwitcher switchTabFunction={setVisualTabContent}/>
            {visualTabContent}
        </div>
    )
}