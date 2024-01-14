interface NewTemplatePopupProps {
    closeButtonFunction: ()=>void,
}

import React, { useState } from 'react';

export const NewTemplatePopup = (props: NewTemplatePopupProps) => {
    const [templateName, setTemplateName] = useState('');
    const [templateDescription, setTemplateDescription] = useState('');
    
    const [templateTags, setTemplateTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle submit logic here
        console.log({ templateName, templateDescription, templateTags });
    };

    const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter" && tagInput) {
            event.preventDefault();
            setTemplateTags(prevTags => [...prevTags, tagInput]);
            setTagInput("");
        }
    }

    const handleRemoveTag = (indexToRemove: number) => {
        setTemplateTags(templateTags.filter((_, tagIndex) => indexToRemove !== tagIndex));
    }

    return (
        <div>
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
                        </div>

                        <div className="mb-4">
                            <label htmlFor="templateDescription" className="block text-gray-700 text-sm font-bold mb-2">Template Description:</label>
                            <textarea placeholder="Enter Description" id="templateDescription" value={templateDescription} onChange={(e) => setTemplateDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows={3}></textarea>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="templateTags" className="block text-gray-700 text-sm font-bold mb-2">Template Tags:</label>
                            <input type="text" 
                                    id="templateTags" 
                                    value={tagInput} 
                                    onChange={(e) => setTagInput(e.target.value)} 
                                    onKeyDown={handleAddTag}
                                    placeholder='Type and Press Enter to Add a Tag'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        
                        <div>
                        {templateTags.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                        </div>


                    </div>


                    <div className='flex flex-row gap-x-3'>
                        <button type="submit" className="bg-RES_ORANGE hover:bg-[#f57607] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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