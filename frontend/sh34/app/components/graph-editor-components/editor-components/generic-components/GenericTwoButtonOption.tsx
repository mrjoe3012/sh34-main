import { useState } from "react"

interface GenericTwoButtonOptionProps {
    firstOptionLabel: string,
    secondOptionLabel: string,
    firstOptionFunction: (inputValue: string) => void,
    secondOptionFunction: (inputValue: string) => void,
}

export const GenericTwoButtonOption = (props: GenericTwoButtonOptionProps) => {

    const [option1Selected, setOption1Selected] = useState(true);

    const handleOption1Clicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOption1Selected(true);
        props.firstOptionFunction(e.currentTarget.innerHTML)
    }

    const handleOption2Clicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOption1Selected(false);
        props.secondOptionFunction(e.currentTarget.innerHTML)
    }

    return(
        <div className="mx-3">
            <div className="flex-grow h-[35px] bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded-md flex items-center mb-2 ">
                <button className={`w-[50%] flex-grow text-center h-full rounded ${option1Selected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleOption1Clicked}>Linear</button>
                <div className={` bg-gray-300 w-[2px] h-[70%]`}></div>
                <button className={`w-[50%] flex-grow text-center h-full rounded ${!option1Selected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleOption2Clicked}>Logarithmic</button>
            </div>
        </div>
    )
}