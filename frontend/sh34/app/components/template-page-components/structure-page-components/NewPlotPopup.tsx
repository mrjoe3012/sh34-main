import InfoIcon from "../../../images/info-icon.png"
import Image from "next/image";

interface NewPlotPopupProps {
    closeButtonFunction: ()=>void,
}

import React, { useState } from 'react';

export const NewPlotPopup = (props: NewPlotPopupProps) => {
    const [plotTitle, setPlotTitle] = useState('');
    const [plotType, setPlotType] = useState('');

    // State for handling errors for Plot Title
    const [displayTitleErrors, setDisplayTitleErrors] = useState(false);
    const [titleErrors, setTitleErrors] = useState<string[]>([]);

    const [displayPlotTypeErrors, setDisplayPlotTypeErrors] = useState(false);
    const [plotTypeErrors, setPlotTypeErrors] = useState<string[]>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        var errorRaised = false;

        // Input Validation for the Plot Creation
        setTitleErrors([]);
        if (plotTitle.trim() == "") {
            setDisplayTitleErrors(true);
            setTitleErrors(prevTitleErrors => [...prevTitleErrors, "Plot Must Have a Title."])
            errorRaised = true;
        } else {
            setDisplayTitleErrors(false);
        }

        setPlotTypeErrors([]);
        if (plotType == "") {
            setDisplayPlotTypeErrors(true);
            setPlotTypeErrors(prevPlotTypeErrors => [...prevPlotTypeErrors, "Must select a Plot Type."])
            errorRaised = true;
        } else {
            setDisplayPlotTypeErrors(false);
        }

        if (errorRaised) {return}
        // Handle submit logic here

        console.log({ plotTitle, plotType });
        props.closeButtonFunction()
    };


    

    return (
        <div className="select-none">
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
            <div className="flex flex-col justify-between w-[500px] h-[450px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[4px] border-RES_ORANGE rounded-lg p-4 z-50">
                
                <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full p-4 overflow-y-auto'>
                    <div className=''>
                        <div className="flex items-center mb-4">
                            <p className='text-3xl mr-3'>Create New Plot</p>
                            <div className="flex-grow bg-[#DCDCDC] w-1 h-1 rounded-xl"></div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="templateName" className="block text-gray-700 text-sm font-bold mb-2">Plot Title:</label>
                            <input placeholder="Enter Title" type="text" id="templateName" value={plotTitle} onChange={(e) => setPlotTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <div className="mt-2 ml-2">
                                {displayTitleErrors && 
                                    titleErrors.map((error, index) => (
                                        <div className="flex items-center" key={index}>
                                            <Image className="w-3 h-3 mr-1 mb-1" src={InfoIcon} alt="Info Error Icon" />
                                            {error}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        <div>
                            <p className="block text-gray-700 text-sm font-bold mb-2"> Plot Type: </p>
                            <div className="flex flex-col">
                                <div>
                                    <input onChange={(e) => setPlotType(e.target.value)} type="radio" name="plot_type" value="Bar" id="Bar"/>
                                    <label className="ml-2" htmlFor="Bar">Bar</label>
                                </div>
                                <div>
                                    <input onChange={(e) => setPlotType(e.target.value)} type="radio" name="plot_type" value="Scatter" id="Scatter"/>
                                    <label className="ml-2" htmlFor="Scatter">Scatter</label>
                                </div>
                                <div>
                                    <input onChange={(e) => setPlotType(e.target.value)} type="radio" name="plot_type" value="Line" id="Line"/>
                                    <label className="ml-2" htmlFor="Line">Line</label>
                                </div>
                                <div>
                                    <input onChange={(e) => setPlotType(e.target.value)} type="radio" name="plot_type" value="Pie" id="Pie"/>
                                    <label className="ml-2" htmlFor="Pie">Pie</label>
                                </div>

                            </div>
                        </div>

                        <div className="mt-2 ml-2">
                            {displayPlotTypeErrors && 
                                plotTypeErrors.map((error, index) => (
                                    <div className="flex items-center" key={index}>
                                        <Image className="w-3 h-3 mr-1 mb-1" src={InfoIcon} alt="Info Error Icon" />
                                        {error}
                                    </div>
                                ))
                            }
                        </div>


                    </div>

                    <div className='flex flex-row gap-x-3'>
                        <button type="submit" className="w-[35%] bg-RES_ORANGE hover:bg-[#f57607] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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