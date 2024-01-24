import React, { useState } from 'react';

interface GenericCheckboxOptionProps {
    labelName: string,
    displayLabel: boolean,
    plotFunction: (inputValue: boolean) => void,
    isCheckedOnRender: boolean
}

export const GenericCheckboxOption = (props: GenericCheckboxOptionProps) => {
    
    const [isChecked, setIsChecked] = useState(props.isCheckedOnRender);

    // Handle checkbox change
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        props.plotFunction(event.target.checked);
    }

    return (
        <div>
            <input
                className="mr-2"
                type="checkbox"
                value={props.labelName}
                id={props.labelName}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            {props.displayLabel && <label htmlFor={props.labelName}>{props.labelName}</label>}
        </div>
    )
}
