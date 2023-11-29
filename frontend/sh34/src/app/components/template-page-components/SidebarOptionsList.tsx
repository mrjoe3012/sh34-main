import { ListOption } from "./SidebarListOption"

interface SidebarProps {
    switchPageFunc: (someComponent: JSX.Element) => void;
  }

export const SidebarOptionsList = (props: SidebarProps) => {
    return (
        <div className='flex flex-col gap-y-5 mt-5'> 
            <ListOption optionName="Info" switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Structure" switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Tab 3" switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Tab 4" switchPageFunc={props.switchPageFunc}/>
            <ListOption optionName="Tab 5" switchPageFunc={props.switchPageFunc}/>
        </div>
    );
  };