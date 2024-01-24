import React, { useState } from 'react';

interface GenericPlotTypeOptionProps {
    contentOnRender: string;
    plotFunction: (inputValue: string) => void;
    traceID: number;
}

export const GenericPlotTypeOption = (props: GenericPlotTypeOptionProps) => {

    const plotTypes = [
        {
            id: "bar",
            name: "Bar",
        },
        {
            id: "scatter",
            name: "Scatter",
        },
        {
            id: "line",
            name: "Line",
        },
        {
            id: "pie",
            name: "Pie",
        },
    ];

    // State to keep track of the selected plot type
    const [selectedPlotType, setSelectedPlotType] = useState(props.contentOnRender);

    // Handle change in radio button selection
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPlotType(event.target.value);
        props.plotFunction(event.target.value); // Call the plotFunction with the new value
    };

    const radioGroupName = `plot-type-option-${props.traceID}`;
    const uniqueId = (plotOptionId: string) => `plot-type-option-${props.traceID}-${plotOptionId}`;

    return (
        <div className="ml-3">
            {plotTypes.map((plotOption, index) => (
                <div key={index}>
                    <form>
                        <input 
                            className="mr-2" 
                            type="radio" 
                            checked={selectedPlotType === plotOption.name} 
                            name={radioGroupName} // Make the name unique
                            id={uniqueId(plotOption.id)} // Make ID unique
                            value={plotOption.name} 
                            onChange={handleChange}
                        />
                        <label className="select-none" htmlFor={uniqueId(plotOption.id)}>
                            {plotOption.name}
                        </label>
                    </form>    
                </div>
            ))}
        </div>
    );
};
