import { EditButton } from "./EditButton";
import { ExportButton } from "./ExportButton";

export const AssetElement = () => {
    return(
        <div>
          <div className='grid grid-cols-7 p-4 items-center auto-rows-[40px]'>
    
            <div className='relative align-baseline col-span-1'> 
              <h1 className='text-lg '>ICON/No</h1>
            </div>  
    
            <div className="col-span-1">
              <h2 className='text-lg'>TemplateNo</h2>
            </div>
    
            <div className="col-span-1">
                <h2 className='text-lg'>15/10/23</h2>
            </div>
    
            <div className="col-span-1">
                <h2 className='text-lg'>15/10/23</h2>
            </div>
    
            <div className='col-span-1 col-start-6 px-0.5'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
              <EditButton />
            </div>
    
            <div className='col-span-1 col-start-7 px-0.5'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
              <ExportButton />
            </div>
    
          </div>
          <hr className='w-[95%] mx-auto'></hr>
        </div>
    
      );
}