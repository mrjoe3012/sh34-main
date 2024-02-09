// ListOption.tsx
import React from 'react';

interface OptionsListOptionProps {
    optionName: string;
    pageToSwitchTo: JSX.Element;
    switchPageFunc: (someComponent: JSX.Element) => void;
    isSelected: boolean;
}

export const ListOption = (props: OptionsListOptionProps) => {
    const handleClick = () => {
        props.switchPageFunc(props.pageToSwitchTo);
    };

    return (
        <div>
            <button
                className={`p-2 pl-10 text-xl ${props.isSelected ? 'underline underline-offset-8 decoration-RES_ORANGE decoration-4' : ''}`}
                onClick={handleClick}
            >
                {props.optionName}
            </button>
        </div>
    );
};