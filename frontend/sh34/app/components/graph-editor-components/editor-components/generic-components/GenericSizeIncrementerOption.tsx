import Image from "next/image"
import uptriangle from '@app/images/uptriangle.png'
import downtriangle from '@app/images/downtriangle.png'
import { use, useEffect, useState } from "react"

interface GenericSizeIncrementerOptionProps {
    labelName: string,
    displayLabel: boolean
    plotFunction: (inputValue: string) => void;
    contentOnRender: number
}

export const GenericSizeIncrementerOption = (props : GenericSizeIncrementerOptionProps) => {

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

    useEffect(()=> {
        setInputValue(String(props.contentOnRender))
        setPrevInputValue(String(props.contentOnRender))
    },[])

    return(
        <div className="flex items-center gap-x-1 ml-3 mr-3">
            {props.displayLabel && <div className="w-[70px] min-w-[70px] text-right pr-2"> {props.labelName} </div>}
            <div className="flex items-center gap-x-1">
                <input  onChange={validateInput}
                        onBlur={handleBlur} 
                        onKeyDown={handleKeyDown} 
                        maxLength={7} 
                        placeholder="" 
                        value={inputValue}
                        className="pl-4 font-medium placeholder-[#ACACAC] h-[35px] w-[100px] bg-[#DCDCDC] rounded-lg flex items-center px-2 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                <div className='flex flex-col h-[35px]'>
                    <button className="bg-[#DCDCDC] border-[2px] border-[#B3B3B3] rounded mb-auto w-4 h-4 flex justify-center items-center"><Image src={uptriangle} alt="uparrow" className='w-2 h-1 opacity-[65%]'></Image></button>
                    <button  className="bg-[#DCDCDC] border-[2px] border-[#B3B3B3] rounded w-4 h-4 flex justify-center items-center"><Image src={downtriangle} alt="uparrow" className='w-2 h-1 opacity-[65%]'></Image></button>
                </div>
            </div>
        </div>
    )
}