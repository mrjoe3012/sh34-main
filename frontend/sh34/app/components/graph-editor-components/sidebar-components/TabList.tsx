// TabList.tsx
import React, { useState } from 'react';
import { ListOption } from "./ListOption";
import { GeneralTab } from "../editor-components/general-tab-components/GeneralTab";
import { LabellingTab } from "../editor-components/labelling-tab-components/LabellingTab";
import { TraceTab } from "../editor-components/trace-tab-components/TraceTab";
import { AnnotationTab } from "../editor-components/annotation-tab-components/AnnotationTab";

interface TabListProps {
    switchPageFunc: (someComponent: JSX.Element) => void;
}

export const TabList = (props: TabListProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(1);

    const handleSwitchPage = (index: number, page: JSX.Element) => {
        props.switchPageFunc(page);
        setSelectedIndex(index);
    };

    return (
        <div className='flex flex-col gap-y-5 mt-5'> 
            <ListOption optionName="Traces" pageToSwitchTo={<TraceTab />} switchPageFunc={(page) => handleSwitchPage(0, page)} isSelected={selectedIndex === 0} />
            <ListOption optionName="General" pageToSwitchTo={<GeneralTab />} switchPageFunc={(page) => handleSwitchPage(1, page)} isSelected={selectedIndex === 1} />
            <ListOption optionName="Labelling" pageToSwitchTo={<LabellingTab />} switchPageFunc={(page) => handleSwitchPage(2, page)} isSelected={selectedIndex === 2} />
            <ListOption optionName="Annotation" pageToSwitchTo={<AnnotationTab />} switchPageFunc={(page) => handleSwitchPage(3, page)} isSelected={selectedIndex === 3} />
        </div>
    );
};