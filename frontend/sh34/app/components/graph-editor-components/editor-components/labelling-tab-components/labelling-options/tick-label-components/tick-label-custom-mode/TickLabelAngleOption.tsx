export const TickLabelAngleOption = () => {
    return(
        <div className="flex gap-x-1 items-center">
            <div className="w-[70px] min-w-[70px]"> Angle </div>
            <select name="TickAngle" placeholder="" className="w-[100px] font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" >
                <option value={"Auto"}>Auto</option>
                <option value={"45"}>45</option>
                <option value={"90"}>90</option>
            </select>
        </div>
    )
}