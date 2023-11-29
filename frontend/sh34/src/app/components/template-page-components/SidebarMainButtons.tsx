import { MainButton } from "./SidebarMainButton";

export const SidebarMainButtons = () => {
    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="Preview" buttonColour="#7B7B7B" imgSrc=""/>
            <MainButton buttonName="Export" buttonColour="#346DFF" imgSrc=""/>
        </div>
    );
  };