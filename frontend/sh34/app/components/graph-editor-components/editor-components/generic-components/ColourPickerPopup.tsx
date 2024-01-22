import { ColorResult, SketchPicker, ChromePicker } from 'react-color';
import {  useState } from 'react';

interface ColourPickerPopupProps {
    hexValue: string;
    validateInput: (hexValue: string)=>void;
}

export const ColourPickerPopup = (props: ColourPickerPopupProps) => {
    const [colourValue, setColourValue] = useState(props.hexValue);

    const handleColorChangeComplete = (color: ColorResult) => {
        setColourValue(color.hex);
        props.validateInput(color.hex);
    };

    return (
        <div className="fixed -translate-x-[-140px] -translate-y-3 z-50">
            <ChromePicker disableAlpha={true} color={colourValue} onChangeComplete={handleColorChangeComplete}/>
        </div>
    );
};