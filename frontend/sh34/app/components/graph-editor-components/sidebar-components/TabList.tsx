import { ListOption } from "./ListOption"

import { GeneralTab } from "../editor-components/general-tab-components/GeneralTab";
import { LabellingTab } from "../editor-components/labelling-tab-components/LabellingTab";
import { VisualTab } from "../editor-components/visual-tab-components/VisualTab";
import { DataMappingTab } from "../editor-components/mapping-tab-components/DataMappingTab";
import { AnnotationTab } from "../editor-components/annotation-tab-components/AnnotationTab";

import React, {useContext, createContext, useState, Dispatch, SetStateAction} from "react";
import { PlotData } from "@app/modules/db";
import { WithId } from "mongodb";

interface TabListProps {
    switchPageFunc: (someComponent: JSX.Element) => void;
    selectedIndicator: string;
    setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
    setSelectedPlotType: React.Dispatch<React.SetStateAction<string>>;
    plot: WithId<PlotData>;
}

export const TabList = (props: TabListProps) => {

    return (
        <div className='flex flex-col gap-y-5 mt-5'> 
            <ListOption optionName="General" pageToSwitchTo={<GeneralTab plot={props.plot} selectedIndicator={props.selectedIndicator} setSelectedPlotType={props.setSelectedPlotType} setSelectedIndicator={props.setSelectedIndicator} />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Visual" pageToSwitchTo={<VisualTab />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Labelling" pageToSwitchTo={<LabellingTab />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Data Mapping" pageToSwitchTo={<DataMappingTab />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Annotation" pageToSwitchTo={<AnnotationTab />} switchPageFunc={props.switchPageFunc} />
        </div>
    );
  };