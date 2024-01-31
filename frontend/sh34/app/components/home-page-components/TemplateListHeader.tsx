import { SortButton } from "./SortButton";

export const TemplateListHeader = () => {
    return(
        <div className=''>
          <div className='grid grid-cols-7 p-4'>
    
            <div className='col-start-1'>
              <h2 className="text-lg font-bold">TemplateID</h2>
            </div>
    
            <div className='col-start-2'>
              <h2 className='text-lg font-bold'>Template Name</h2>
            </div>
    
            <div className='col-start-3'>
              <h2 className='text-lg font-bold'>Creation Date</h2>
            </div>
    
            <div className='col-start-4'>
              <h2 className='text-lg font-bold'>Last Modified</h2>  
            </div>
    
            <div className='col-start-5 flex justify-end'>
              <h2 className='text-lg inline font-medium placeholder-[#ACACAC]'>Sort</h2>  
            </div>
    
            <div className='col-start-6 flex justify-center'>
               <select placeholder="Select an option" className="font-medium placeholder-[#ACACAC] h-[35px] w-[150px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none">
                <option value="1">TemplateID</option>
                <option value="2">Template Name</option>
                <option value="3">Creation Date</option>
                <option value="4">Last Modified</option>
                
              </select>
            </div>
    
            <div className='col-start-7 text-lg inline float-left'>
                <SortButton />
            </div>
    
          </div>
          <hr className='bg-slate-900'></hr>
        </div>
      );
}