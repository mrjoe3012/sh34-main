'use client';
import { useState } from "react";

interface ExportButtonProps {
  templateID: number;

};

export const ExportButton = ({ templateID }:ExportButtonProps) =>{
  const [downloading, setDownloading] = useState(false);

  const handleExport = async() => {
    setDownloading(true);
    const url = '/api/generate-doc';
    console.log('bruh');
    try{
      const response = await fetch(url,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ templateID })
      });
      const requestBody = JSON.stringify({ templateID });
      console.log('Sending:', requestBody);
      console.log(response);
      if(response.ok){
        console.log("awe");
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = 'downloaded_file.docx';
        if (contentDisposition){
          console.log("awe");
          const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
          if (filenameMatch && filenameMatch.length > 1){
            filename = filenameMatch[1];
          }
        }
        const blob = await response.blob();
        console.log("awd");
        const url = window.URL.createObjectURL(blob);
        console.log(blob);
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        //document.body.appendChild(a);
        link.click();

        //window.URL.revokeObjectURL(url);
        //a.remove();
        setDownloading(false);
      }else{
        console.error("Server Error", response.statusText);
        setDownloading(false);
      }
    }catch(error){
      console.error('Network Error', error);
      setDownloading(false);
    }
  }

  return(
          <div>

            <button onClick = {handleExport} className='text-center w-5/6'>
              <div className="justify-center flex rounded-xl p-2 border-black border-2 relative bg-[#346DFF]">
                <p className="text-slate-50 basis-10/11">Export</p>
              </div>
            </button>

            {downloading &&(
            <div className="popup">
              Downloading File...
            </div>
            )}
            </div>
        );


//   if (page=="home") {
//     return(
//       <div>

//         <button onClick = {handleExport} className='text-center w-5/6'>
//           <div className="justify-center flex rounded-xl p-2 border-black border-2 relative bg-[#346DFF]">
//             <p className="text-slate-50 basis-10/11">Export</p>
//           </div>
//         </button>

//         {downloading &&(
//         <div className="popup">
//           Downloading File...
//         </div>
//         )}
//         </div>
//     );
//   } else if (page=="template") {
//     return(
//       <div>
//       <button onClick = {handleExport} className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#7D7D7D] rounded-xl flex justify-center items-center border-[2px] border-slate-700`}>
//         <p> Export </p>
//       </button>
//       {downloading &&(
//         <div className="popup">
//           Downloading File...
//         </div>
//         )}
//       </div>
//     )
//   }

 }