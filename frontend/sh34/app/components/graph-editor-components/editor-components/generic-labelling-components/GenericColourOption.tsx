interface GenericColourOptionProps {
    displayLabel: boolean;
}

export const GenericColourOption = (props : GenericColourOptionProps) => {
    return (
        <div className="flex items-center gap-x-1 ml-3 mr-3 ">
            {props.displayLabel && <div className="w-[70px] min-w-[70px]">Colour</div>}
            <div className="flex items-center gap-x-1">
                <input maxLength={7} placeholder="#" className=" font-medium placeholder-[#ACACAC] h-[35px] w-[100px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                <div className="w-8 h-8 bg-red-500 rounded-md flex border-black border-2"> </div>
            </div>
        </div>
    )
}