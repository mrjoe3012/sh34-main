export const TemplateListHeader = () => {
    return(
        <div className=''>
          <div className='grid grid-cols-7 p-4'>
    
            <div className='col-start-1'>
              <h2 className="text-lg font-bold">Type/TemplateID</h2>
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
    
            <div className='col-start-5'>
              <h2 className='text-lg inline float-right p-1'>Sort </h2>  
            </div>
    
            <div className='col-start-6'>
               <select placeholder="Select an option" className="font-medium placeholder-[#ACACAC] h-[35px] w-[150px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none">
                <option value="1">ID</option>
                <option value="1">Creation date</option>
                <option value="1">Last modified</option>
                <option value="1">Name</option>
              </select>
            </div>
    
            <div className='col-start-7'>
              <h2 className='text-lg inline float-left p-1'>Acending</h2>  
            </div>
    
          </div>
          <hr className='bg-slate-900'></hr>
        </div>
      );
}