import React, { use, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { treeStructure, DataStructure, OptionsContainer, Option } from './treeStructure';

interface DataPopupProps {
    onClose: () => void;
}


export const DataPopup = (props: DataPopupProps) => {

    const [selectingX, setSelectingX] = useState(true);

    const [currentYOptions, setCurrentYOptions] = useState<Option[] | null>(null);
    const [currentTitle, setCurrentTitle] = useState<string>('');

    const [xFieldName, setXFieldName] = useState<string>("")
    const [yFieldName, setYFieldName] = useState<string>("")

    const [xFieldTag, setXFieldTag] = useState<string>("")
    const [yFieldTag, setYFieldTag] = useState<string>("")

    const isOptionsContainer = (data: any): data is OptionsContainer => {
        return 'xoptions' in data && 'yoptions' in data;
    };

    const handleXOptionClick = (yoptions: Option[], dataTitle:string, event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentYOptions(yoptions);
        setCurrentTitle(dataTitle);
        setXFieldName(event.currentTarget.textContent ?? "Undefined")

        const tag = event.currentTarget.getAttribute('data-tag');
        setXFieldTag(tag ?? "Undefined")

        setSelectingX(false);
    };

    const handleYOptionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setYFieldName(event.currentTarget.textContent ?? "Undefined")

        const tag = event.currentTarget.getAttribute('data-tag');
        setYFieldTag(tag ?? "Undefined")
    };

    // State to keep track of which dropdowns are open
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

    // Toggles the open state of a dropdown
    const toggleDropdown = (key: string) => {
        setOpenDropdowns((prevOpenDropdowns) => ({
            ...prevOpenDropdowns,
            [key]: !prevOpenDropdowns[key],
        }));
    };


    const RenderOptions = ({ data, dataTitle }: { data: DataStructure | OptionsContainer, dataTitle: string }) => {

        if (isOptionsContainer(data)) {
            // Its an OptionsContainer - Render the Buttons

            return (
                <>
                    <div className='ml-3'>
                        {data.xoptions.map((option,index) => (
                            <button
                                onClick={(event) => handleXOptionClick(data.yoptions, dataTitle, event)}
                                key={index}
                                data-tag={option.tag}
                                className="mb-3 mr-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                                {option.name}
                            </button>
                        ))}
                    </div>
                </>
            );

        } else {
            // It's another nested DataStructure

            return (
                <>
                    {Object.entries(data).map(([key, value]) => {
                        const isOpen = openDropdowns[key];
                        return (
                            <div key={key} className='select-none'>
                                <p className="my-1 font-bold cursor-pointer" onClick={() => toggleDropdown(key)}>
                                    {isOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />} {key}
                                </p>
                                {/* Only render the content if the dropdown is open */}
                                {isOpen && (
                                    <div style={{ marginLeft: '1em' }}> {/* Indent nested content */}
                                        <RenderOptions data={value} dataTitle={dataTitle + " - " + key}/>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </>
            );

        }
    };

    const RenderYOptions = ({yOptions} : {yOptions: Option[]}) => {

        return(
            <>
            <div>
                {yOptions.map((option,index) => (
                    <button
                        onClick={(event) => handleYOptionClick(event)}
                        key={index}
                        data-tag={option.tag}
                        className="mb-1 mr-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                        {option.name}
                    </button>
                ))}
            </div>
        </>
        )
    }

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

            <div className="flex flex-col justify-between w-[500px] h-[600px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[4px] border-RES_ORANGE rounded-lg p-4 z-50">
                <div className='overflow-y-auto'>
                    <p className='text-3xl mb-5'> Data Field Selector </p>

                    <p className='text-2xl'> Step 1/2 - Selecting X Axis Data </p>

                    <div className='mb-4'>
                        <div className='flex gap-x-2'>
                            <p>X Axis Field: </p> {currentTitle} {xFieldName}
                        </div>
                        <div className='flex gap-x-2'>
                            <p>Y Axis Field: </p> {currentTitle} {yFieldName}
                        </div>
                    </div>

                    {/* Conditional rendering based on whether currentYOptions is set */}
                    {selectingX ? (
                        <RenderOptions data={treeStructure} dataTitle='' />
                    ) : currentYOptions && (
                        <>
                            <p className="my-1 font-bold cursor-pointer">{currentTitle}</p>
                            <RenderYOptions yOptions={currentYOptions}  />
                        </>
                    )}


                </div>

                <div className='flex gap-x-3'>
                    <button onClick={props.onClose} className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-[#828282] w-[35%]">
                        Cancel
                    </button>
                    <button className="mt-2 px-4 py-2 bg-RES_ORANGE text-white rounded hover:bg-[#f57607] w-[35%]">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    );
};