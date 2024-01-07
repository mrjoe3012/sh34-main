import { VisualTabSwitcher } from "./VisualGraphOptionTabSwitcher"
import { useState } from 'react';

export const VisualGraphOptions = () => {
    const [visualTabContent,setVisualTabContent] = useState(<div> None </div>);

    return(
        <div className="w-full">
            <VisualTabSwitcher switchTabFunction={setVisualTabContent}/>
            {visualTabContent}
        </div>
    )
}