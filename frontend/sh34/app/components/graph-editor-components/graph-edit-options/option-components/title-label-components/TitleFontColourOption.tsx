export const TitleFontColourOption = () => {
    return (
        <div className="flex items-center">
            <div className="basis-[30%]"> Colour </div>
            <div className="flex-grow flex items-center gap-x-1">
                <div className="ml-1">
                    <input maxLength={7} placeholder="#" className=" font-medium placeholder-[#ACACAC] h-[35px] w-[100px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-3xl flex border-black border-2"> </div>
            </div>
        </div>
    )
}