import { ListOption } from "./SidebarListOption"

export const SidebarOptionsList = () => {
    return (
        <div className='flex flex-col gap-y-5 mt-5'> 
            <ListOption optionName="Info" />
            <ListOption optionName="Structure" />
            <ListOption optionName="Tab 3" />
            <ListOption optionName="Tab 4" />
            <ListOption optionName="Tab 5" />
        </div>
    );
  };