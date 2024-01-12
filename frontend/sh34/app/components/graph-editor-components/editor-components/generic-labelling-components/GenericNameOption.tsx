export const GenericNameOption = () => {
    return (
        <div className="flex items-center gap-x-1">
            <div className="w-[70px] min-w-[70px]">Name</div> 
            <input placeholder="" className="flex-grow font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
        </div>
        
    )
}