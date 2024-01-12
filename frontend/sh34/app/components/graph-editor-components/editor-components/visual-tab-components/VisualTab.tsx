import { VisualTabPageSwitcher } from "./VisualTabPageSwitcher"
import { useState } from 'react';
import { VisualTextTab } from "./visual-options/text-tab/VisualTextTab";
import { OptionTabTitle } from "../OptionTabTitle";

export const VisualTab = () => {
    const [visualTabContent,setVisualTabContent] = useState(<VisualTextTab />);

    return(
        <div className="w-full">
            < OptionTabTitle titleName="Visual Options" />
            <VisualTabPageSwitcher switchTabFunction={setVisualTabContent}/>
            {visualTabContent}
        </div>
    )
}