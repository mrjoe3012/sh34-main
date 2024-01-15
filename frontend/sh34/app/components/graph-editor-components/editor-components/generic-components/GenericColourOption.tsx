import { useState } from "react";

interface GenericColourOptionProps {
    labelName: string,
    displayLabel: boolean;
    plotFunction: (inputValue: string) => void;
}

export const GenericColourOption = (props : GenericColourOptionProps) => {

    const [hexValue, setHexValue] = useState('');

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        props.plotFunction(e.currentTarget.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
        props.plotFunction(e.currentTarget.value)
    }
    };

    const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const validValue = event.target.value.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6);
      setHexValue(validValue);
    };
  
    return (
      <div className="flex items-center gap-x-1 ml-3 mr-3 ">
        {props.displayLabel && <div className="w-[70px] min-w-[70px] text-right pr-2">{props.labelName}</div>}
        <div className="flex items-center gap-x-1">
          <div className="flex border-2 border-[#B3B3B3] bg-[#DCDCDC] rounded-lg focus-within:border-RES_ORANGE h-[35px] w-[100px]">
            <span className="flex items-center pl-3 pr-1 text-gray-700 mt-1">#</span>
            <input 
              type="text" 
              className="bg-[#DCDCDC] w-full flex-1 rounded-r-lg focus:outline-none" 
              placeholder="" 
              maxLength={6} 
              pattern="[0-9A-Fa-f]" 
              value={hexValue}
              onChange={validateInput}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="w-8 h-8 bg-red-500 rounded-md flex border-black border-2"> </div>
        </div>
      </div>
    );
  }