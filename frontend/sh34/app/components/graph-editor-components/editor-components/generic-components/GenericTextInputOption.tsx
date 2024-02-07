import { useEffect, useState } from "react"

interface GenericTextInputOptionProps {
    placeholder: string,
    labelName: string,
    displayLabel: boolean,
    width: string,
    textPos: string,
    plotFunction: (inputValue: string) => void,
    contentOnRender: string,
}

export const GenericTextInputOption = (props : GenericTextInputOptionProps) => {

    const [ inputValue, setInputValue ] = useState("")
    const [ prevInputValue, setPrevInputValue ] = useState("")

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (inputValue != prevInputValue) {
            props.plotFunction(e.currentTarget.value)
            setPrevInputValue(e.currentTarget.value)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            if (inputValue != prevInputValue) {
                props.plotFunction(e.currentTarget.value)
                setPrevInputValue(e.currentTarget.value)
            }
        }
    };

    const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    useEffect(()=>{
        setInputValue(props.contentOnRender)
        setPrevInputValue(props.contentOnRender)
    },[])

    return (
        <div className="flex items-center gap-x-1 ml-3 mr-3">
            <div className="w-[50px] min-w-[50px] text-right pr-2">{props.labelName}</div>
            <input value={inputValue} onChange={validateInput} onBlur={handleBlur} onKeyDown={handleKeyDown} type="text" placeholder={props.placeholder} className={`${props.width} ${props.textPos} px-4 w-[80%] font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center  border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none`} />
        </div>
    )
}