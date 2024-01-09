export const DataPointConstantOption = () => {
    
    return(
        <div className="mb-5" >
            <div className="flex items-center ml-3">
                <div className="w-3 h-3 border-l-2 border-b-2 border-[#B3B3B3] mr-1"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-3xl flex border-black border-2"> </div>
                <div className="ml-1">
                    <input 
                        maxLength={7}
                        placeholder="#" 
                        className=" font-medium placeholder-[#ACACAC] h-[35px] w-[100px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                </div>
            </div>
        </div>
    )
}