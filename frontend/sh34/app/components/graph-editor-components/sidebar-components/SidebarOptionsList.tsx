import { ListOption } from "./SidebarListOption"
import { GeneralGraphOptions } from "../graph-edit-options/general-tab-components/GeneralGraphOptions";
import { LabellingGraphOptions } from "../graph-edit-options/labelling-tab-components/LabellingGraphOptions";
import { VisualGraphOptions } from "../graph-edit-options/visual-tab-components/VisualGraphOptions";
import { DataMapGraphOptions } from "../graph-edit-options/datamap-tab-components/DataMapGraphOptions";

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