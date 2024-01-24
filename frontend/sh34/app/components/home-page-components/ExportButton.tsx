
interface ExportButtonProps {
  templateID: number;
};

export const ExportButton = ({ templateID }:ExportButtonProps) =>{
 const handleExport = async() => {
    const url = '/api/generate-doc';

    try{
      const response = await fetch(url,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ templateID })
      });
      if(response.ok){
        const data = await response.json();
        console.log('Success', data);
      }else{
        console.error("Server Error", response.statusText);
      }
    }catch(error){
      console.error('Network Error', error);
    }
  }
    return(
        <div className='text-center w-5/6'>
          <div className="justify-center flex rounded-xl p-2 border-black border-2 relative bg-[#346DFF]">
            <p className="text-slate-50 basis-10/11">Export</p>
          </div>
        </div>
    );
}