export const PlotSizeOption = () => {
    return(
        <div className="mb-10">
                <p className="text-xl"> Plot Size </p>
                <div className="flex flex-col gap-y-1  ml-2">
                    <div className="flex justify-between">
                        <div className="flex items-center "> Width </div>
                        <div className="ml-1">
                            <input 
                            placeholder="" 
                            className=" font-medium placeholder-[#ACACAC] h-[40px] w-[90px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE" />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center"> Height </div>
                        <div className="ml-1">
                            <input 
                            placeholder="" 
                            className=" font-medium placeholder-[#ACACAC] h-[40px] w-[90px] bg-[#DCDCDC] rounded-xl flex items-center pl-4  border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE" />
                        </div>
                    </div>
                </div>
        </div>
    )
}