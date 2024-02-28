"use client"
import InfoIcon from "../../images/info-icon.png"
import CloseIcon from "../../images/close-icon.png"
import Image from "next/image";

interface NewTemplatePopupProps {
    closeButtonFunction: ()=>void,
}

import React, { useState } from 'react';
import { WithId } from "mongodb";
import { TemplateData } from "@app/modules/db";
import { useHomePageContext } from "@app/home/HomePageContext";

export const NewTemplatePopup = (props: NewTemplatePopupProps) => {
    const [templateName, setTemplateName] = useState('');
    const [templateDescription, setTemplateDescription] = useState('');
    
    const [templateTags, setTemplateTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');

    // State for handling errors for TemplateNameField
    const [displayNameErrors, setDisplayNameErrors] = useState(false);
    const [nameErrors, setNameErrors] = useState<string[]>([])
    const {templates, setTemplates, setNeedSorting} = useHomePageContext();
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Input Validation for the Template Creation Form.
        setNameErrors([])
        if (templateName.trim() == "") {
            setDisplayNameErrors(true);
            setNameErrors(prevNameErrors => [...prevNameErrors, "Template Must Have a Name."])
            return;
        } else {
            setDisplayNameErrors(false);
        }
        // Handle submit logic here
        const response = await fetch(
            '/api/add-template', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    'Name': templateName,
                    'Description': templateDescription,
                    'Tags': templateTags
                }),
            }
        );
        if (response.status != 200) {
            console.error(`Failed to add template to database.`);
        }
        const template: WithId<TemplateData> = await response.json();
        setTemplates([...templates, template]);
        console.log({ templateName, templateDescription, templateTags });
        // trigger templates to get sorted
        setNeedSorting(true);
        props.closeButtonFunction();
    };

    const handleAddTagOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter" && tagInput && tagInput.trim() != "") {
            event.preventDefault();
            setTemplateTags(prevTags => [...prevTags, tagInput]);
            setTagInput("");
        }
    }

    const handleAddTagOnClickOff = (event: React.FocusEvent<HTMLInputElement>) => {
        if (tagInput && tagInput.trim() != "") {
            event.preventDefault();
            setTemplateTags(prevTags => [...prevTags, tagInput]);
            setTagInput("");
        }
    }

    const handleRemoveTag = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, indexToRemove: number) => {
        event.preventDefault()
        setTemplateTags(templateTags.filter((_, tagIndex) => indexToRemove !== tagIndex));
    }

    return (
        <div className="select-none">
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
            <div className="flex flex-col justify-between w-[500px] h-[600px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[4px] border-RES_ORANGE rounded-lg p-4 z-50">
                
                <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full p-4 overflow-y-auto'>
                    <div className=''>
                        <div className="flex items-center mb-4">
                            <p className='text-3xl mr-3'>Create New Template</p>
                            <div className="flex-grow bg-[#DCDCDC] w-1 h-1 rounded-xl"></div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="templateName" className="block text-gray-700 text-sm font-bold mb-2">Template Name:</label>
                            <input placeholder="Enter Name" type="text" id="templateName" value={templateName} onChange={(e) => setTemplateName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <div className="mt-2 ml-2">
                                {displayNameErrors && 
                                    nameErrors.map((error, index) => (
                                        <div className="flex items-center" key={index}>
                                            <Image className="w-3 h-3 mr-1 mb-1" src={InfoIcon} alt="Info Error Icon" />
                                            {error}
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <div className="mb-4">
                            <label htmlFor="templateDescription" className="block text-gray-700 text-sm font-bold mb-2">Template Description:</label>
                            <textarea placeholder="Enter Description" id="templateDescription" value={templateDescription} onChange={(e) => setTemplateDescription(e.target.value)} className="min-h-[90px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows={3}></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="templateTags" className="block text-gray-700 text-sm font-bold mb-2">Template Tags:</label>
                            <input type="text" 
                                    id="templateTags" 
                                    value={tagInput} 
                                    onChange={(e) => setTagInput(e.target.value)} 
                                    onKeyDown={handleAddTagOnEnter}
                                    onBlur={handleAddTagOnClickOff}
                                    placeholder='Type and Press Enter to Add a Tag'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        
                        <div className="flex flex-wrap gap-x-1 gap-y-1 mb-5">
                            {templateTags.map((item, index) => (
                                <div className="bg-[#c2cbed] text-gray-900 w-fit px-2 py-1 rounded-xl flex items-center" key={index}>
                                    {item}
                                    <div onClick={(e) => handleRemoveTag(e, index)} className="hover:cursor-pointer w-3 h-3 pl-1"><Image src={CloseIcon} className="opacity-[70%]" alt="Remove"></Image></div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className='flex flex-row gap-x-3'>
                        <button type="submit" className="bg-RES_ORANGE hover:bg-[#f57607] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[35%]">
                            Submit
                        </button>

                        <button onClick={props.closeButtonFunction} className="bg-gray-400 text-white rounded hover:bg-[#f57607] w-[35%]">
                            Close
                        </button>
                    </div>

                </form>    
            </div>
        </div>
    );
};