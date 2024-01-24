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
        <div className="ml-3 mr-3 mb-1 mt-2">
            <ChromePicker disableAlpha={true} color={colourValue} onChangeComplete={handleColorChangeComplete}/>
        </div>
    );
};