export const TitleTypefaceOption = () => {
    return (
        <div className="flex gap-x-1">
            <div className="basis-[30%]"> Typeface</div>
            <select 
                placeholder="" 
                className="flex-grow font-medium placeholder-[#ACACAC] h-[35px] w-[150px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
        </div>
    )
}