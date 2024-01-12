export const TickLabelAngleOption = () => {
    return(
        <div className="flex gap-x-1 items-center">
            <div className="basis-[30%]"> Angle </div>
            <select 
                placeholder="" 
                className="font-medium placeholder-[#ACACAC] h-[35px] w-[100px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
        </div>
    )
}