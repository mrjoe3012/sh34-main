import  { ChangeEvent } from "react"

interface GenericAngleOptionProps {
    plotFunction: (inputValue: string) => void,
}

export const GenericAngleOption = (props: GenericAngleOptionProps) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.plotFunction(e.currentTarget.value)
    }

    return(
        <div className="mx-3 flex gap-x-1 items-center">
            <div className="w-[70px] min-w-[70px] pr-2 text-right"> Angle </div>
            <select onChange={handleChange} name="TickAngle" placeholder="" className="w-[100px] font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" >
                <option value={"0"}>0</option>
                <option value={"45"}>45</option>
                <option value={"90"}>90</option>
            </select>
        </div>
    )
}