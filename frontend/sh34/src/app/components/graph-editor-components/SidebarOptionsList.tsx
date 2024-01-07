import { ListOption } from "./SidebarListOption"
import { GeneralGraphOptions } from "./graph-edit-options/GeneralGraphOptions";
import { LabellingGraphOptions } from "./graph-edit-options/LabellingGraphOptions";
import { VisualGraphOptions } from "./graph-edit-options/VisualGraphOptions";
import { DataMapGraphOptions } from "./graph-edit-options/DataMapGraphOptions";

interface SidebarProps {
    switchPageFunc: (someComponent: JSX.Element) => void;
  }

export const SidebarOptionsList = (props: SidebarProps) => {
    return (
        <div className='flex flex-col gap-y-5 mt-5'> 
            <ListOption optionName="General" pageToSwitchTo={<GeneralGraphOptions />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Labelling" pageToSwitchTo={<LabellingGraphOptions />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Visual" pageToSwitchTo={<VisualGraphOptions />} switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Data Mapping" pageToSwitchTo={<DataMapGraphOptions />} switchPageFunc={props.switchPageFunc}/>
        </div>
    );
  };