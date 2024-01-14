import  { ChangeEvent } from "react"

interface GenericTypefaceOptionProps {
    displayLabel: boolean
    plotFunction: (inputValue: string) => void,
}

export const GenericTypefaceOption = (props : GenericTypefaceOptionProps) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.plotFunction(e.currentTarget.value)
    }

    return (
        <div className="flex gap-x-1 items-center ml-3 mr-3 ">
            {props.displayLabel && <div className="w-[70px] min-w-[70px] text-right pr-2"> Typeface</div>}
            <select
                onChange={handleChange} 
                placeholder="" 
                className="flex-grow font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus-within:border-RES_ORANGE" />
        </div>
    )
}