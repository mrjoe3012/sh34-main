export const FontTypefaceOption = () => {
    
    return(
        <div className="mb-10">
            <p className="text-xl"> Typeface </p>
            <div className="ml-1">
                    <input 
                        maxLength={7}
                        placeholder="" 
                        className=" font-medium placeholder-[#ACACAC] h-[40px] w-[150px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                </div>
        </div>
    )
}