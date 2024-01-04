import { ListOption } from "./SidebarListOption"

interface SidebarProps {
    switchPageFunc: (someComponent: JSX.Element) => void;
  }

export const SidebarOptionsList = (props: SidebarProps) => {
    return (
        <div className='flex flex-col gap-y-5 mt-5'> 
            <ListOption optionName="General" switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Labelling" switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Visual" switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Data Mapping" switchPageFunc={props.switchPageFunc}/>
        </div>
    );
  };