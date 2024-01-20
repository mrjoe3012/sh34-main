import { ListOption } from "./ListOption"

import { GeneralTab } from "../editor-components/general-tab-components/GeneralTab";
import { LabellingTab } from "../editor-components/labelling-tab-components/LabellingTab";
import { VisualTab } from "../editor-components/visual-tab-components/VisualTab";
import { TraceTab } from "../editor-components/trace-tab-components/TraceTab";
import { AnnotationTab } from "../editor-components/annotation-tab-components/AnnotationTab";

import React, {useContext, createContext, useState, Dispatch, SetStateAction} from "react";
import { PlotData } from "@app/modules/db";
import { WithId } from "mongodb";

interface TabListProps {
    switchPageFunc: (someComponent: JSX.Element) => void;
}

export const TabList = (props: TabListProps) => {

    return (
        <div className='flex flex-col gap-y-5 mt-5'> 
            <ListOption optionName="Traces" pageToSwitchTo={<TraceTab />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="General" pageToSwitchTo={<GeneralTab />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Labelling" pageToSwitchTo={<LabellingTab />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Annotation" pageToSwitchTo={<AnnotationTab />} switchPageFunc={props.switchPageFunc} />
        </div>
    );
  };