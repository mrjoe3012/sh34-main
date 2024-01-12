interface GenericTypefaceOptionProps {
    displayLabel: boolean
}

export const GenericTypefaceOption = (props : GenericTypefaceOptionProps) => {
    return (
        <div className="flex gap-x-1 items-center ml-3 mr-3 ">
            {props.displayLabel && <div className="w-[70px] min-w-[70px]"> Typeface</div>}
            <select 
                placeholder="" 
                className="flex-grow font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
        </div>
    )
}