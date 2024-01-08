import { VisualTabSwitcher } from "./VisualGraphOptionTabSwitcher"
import { useState } from 'react';
import { VisualTextTab } from "./VisualTextTab";

export const VisualGraphOptions = () => {
    const [visualTabContent,setVisualTabContent] = useState(<VisualTextTab />);

    return(
        <div className="w-full flex flex-col items-center">
            <VisualTabSwitcher switchTabFunction={setVisualTabContent}/>
            {visualTabContent}
        </div>
    )
}