import { ListOption } from "./SidebarListOption"
import { GeneralGraphOptions } from "../editor-components/general-tab-components/GeneralTab";
import { LabellingGraphOptions } from "../editor-components/labelling-tab-components/LabellingTab";
import { VisualGraphOptions } from "../editor-components/visual-tab-components/VisualTab";
import { DataMapGraphOptions } from "../editor-components/mapping-tab-components/DataMappingTab";

interface SidebarProps {
    switchPageFunc: (someComponent: JSX.Element) => void;
    setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
    setSelectedPlotType: React.Dispatch<React.SetStateAction<string>>;
  }

export const SidebarOptionsList = (props: SidebarProps) => {
    return (
        <div className='flex flex-col gap-y-5 mt-5'> 
            <ListOption optionName="General" pageToSwitchTo={<GeneralGraphOptions setSelectedPlotType={props.setSelectedPlotType} setSelectedIndicator={props.setSelectedIndicator} />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Visual" pageToSwitchTo={<VisualGraphOptions />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Labelling" pageToSwitchTo={<LabellingGraphOptions />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Data Mapping" pageToSwitchTo={<DataMapGraphOptions />} switchPageFunc={props.switchPageFunc}/>
        </div>
    );
  };