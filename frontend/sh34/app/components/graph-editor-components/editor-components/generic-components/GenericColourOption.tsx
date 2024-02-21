import { useEffect, useState } from "react";
import { ColourPickerPopup } from "./ColourPickerPopup";

interface GenericColourOptionProps {
    labelName: string,
    displayLabel: boolean;
    plotFunction: (inputValue: string) => void;
    contentOnRender: string
}

export const GenericColourOption = (props : GenericColourOptionProps) => {

    const [hexValue, setHexValue] = useState("");
    const [prevHexValue, setPrevHexValue] = useState("")
    const [showColourPicker, setShowColourPicker] = useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (hexValue != prevHexValue) {
          props.plotFunction(e.currentTarget.value)
          setPrevHexValue(e.currentTarget.value)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      if (hexValue != prevHexValue) {
        props.plotFunction(e.currentTarget.value)
        setPrevHexValue(e.currentTarget.value)
      }
    }
    };

    const validateInputFromEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
      const validValue = event.target.value.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6);
      setHexValue(validValue);
    };

    const validateInputFromPicker = (hexValue: string) => {
      const validValue = hexValue.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6);
      props.plotFunction(validValue)
      setHexValue(validValue);
    };

    const toggleColourPicker = () => {
      setShowColourPicker(!showColourPicker)
    }

    // This function runs when a GenericColourOption component renders, setting its value to the value in the config
    useEffect(() => {
      setHexValue(props.contentOnRender)
      setPrevHexValue(props.contentOnRender)
    }, [])

    return (
      <>
      <div className="flex items-center ml-3 mr-3 ">
        {props.displayLabel && <div className="w-[70px] min-w-[70px] text-right pr-2">{props.labelName}</div>}
        <div className="flex items-center gap-x-1">
        <button onClick={toggleColourPicker} className={`w-8 h-8 rounded-md flex border-gray-300 border-2`} style={{ backgroundColor: `#${hexValue}` }}> </button>
          <div className="flex border-2 border-[#B3B3B3] bg-[#DCDCDC] rounded-lg focus-within:border-RES_ORANGE h-[35px] w-[100px]">
            <span className="flex items-center pl-3 pr-1 text-gray-700">#</span>
            <input
              type="text"
              className="bg-[#DCDCDC] w-full flex-1 rounded-r-lg focus:outline-none"
              placeholder=""
              maxLength={6}
              pattern="[0-9A-Fa-f]"
              value={hexValue}
              onChange={validateInputFromEvent}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

      </div>
      {showColourPicker && < ColourPickerPopup hexValue={hexValue} validateInput={validateInputFromPicker}/>}
      </>
    );
  }