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
      if(response.ok){
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = 'downloaded_file.docx'
        if (contentDisposition){
          const filenameMatch = contentDisposition.match(/filename="(.+)"/);
          if (filenameMatch && filenameMatch.length === 2){
            filename = filenameMatch[1];
          }
        }

        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a')

        a.href = url
        a.download = filename
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        a.remove()
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
}