import { VisualTabSwitcher } from "./VisualGraphOptionTabSwitcher"
import { useState } from 'react';
import { VisualTextTab } from "./VisualTextTab";

export const VisualGraphOptions = () => {
    const [visualTabContent,setVisualTabContent] = useState(<VisualTextTab />);

    return(
        <div className="w-full">
            <VisualTabSwitcher switchTabFunction={setVisualTabContent}/>
            {visualTabContent}
        </div>
    )
}