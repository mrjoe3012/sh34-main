import React, { useState } from 'react';

interface GenericPlotTypeOptionProps {
    contentOnRender: string;
    plotFunction: (inputValue: string) => void;
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
        }
    ];

    // State to keep track of the selected plot type
    const [selectedPlotType, setSelectedPlotType] = useState(props.contentOnRender);

    // Handle change in radio button selection
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPlotType(event.target.value);
        props.plotFunction(event.target.value); // Call the plotFunction with the new value
    };

    return (
        <div className="ml-3">
            {plotTypes.map((plotOption, index) => (
                <div key={index}>
                    <form>
                        <input 
                            className="mr-2" 
                            type="radio" 
                            checked={selectedPlotType === plotOption.name} 
                            name="plot-type-option" // Use the same name for all radio inputs to link them
                            id={"plot-type-option-" + plotOption.id} 
                            value={plotOption.name} // Use plotOption.name to match with selectedPlotType
                            onChange={handleChange} // Handle changes
                        />
                        <label className="select-none" htmlFor={"plot-type-option-" + plotOption.id}>
                            {plotOption.name}
                        </label>
                    </form>    
                </div>
            ))}
        </div>
    );
};
