import React, { use, useEffect, useState } from 'react';

import { treeStructure, DataStructure, OptionsContainer, Option } from './treeStructure';

interface DataPopupProps {
    onClose: () => void;
}


export const DataPopup = (props: DataPopupProps) => {

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
    };

    const handleYOptionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setYFieldName(event.currentTarget.textContent ?? "Undefined")

        const tag = event.currentTarget.getAttribute('data-tag');
        setYFieldTag(tag ?? "Undefined")
    };


    const RenderOptions = ({ data, dataTitle }: { data: DataStructure | OptionsContainer, dataTitle: string }) => {

        if (isOptionsContainer(data)) {
            // Its an OptionsContainer - Render the Buttons

            return (
                <>
                    <div>
                        {data.xoptions.map((option,index) => (
                            <button
                                onClick={(event) => handleXOptionClick(data.yoptions, dataTitle, event)}
                                key={index}
                                data-tag={option.tag}
                                className="mb-1 mr-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
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
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <p className="mb-2 font-bold">{key}</p>
                            <RenderOptions data={value} dataTitle={dataTitle + " - " + key}/>
                        </div>
                    ))}
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

                    {xFieldName}
                    {yFieldName}

                    {/* Conditional rendering based on whether currentYOptions is set */}
                    {!currentYOptions ? (
                        <RenderOptions data={treeStructure} dataTitle='' />
                    ) : (
                        <>
                            <p className='text-2xl mb-4'>{currentTitle}</p>
                            <RenderYOptions yOptions={currentYOptions}  />
                        </>
                    )}


                </div>
                <button onClick={props.onClose} className="mt-2 px-4 py-2 bg-RES_ORANGE text-white rounded hover:bg-[#f57607] w-[35%]">
                    Close
                </button>
            </div>
        </div>
    );
};