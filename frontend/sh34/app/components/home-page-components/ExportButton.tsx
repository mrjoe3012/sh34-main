'use client';
import { PlotLoader } from "@app/modules/PlotLoader";
import { error } from "console";
import { useState } from "react";

interface ExportButtonProps {
  templateID: number;
  page: string;

};

export const ExportButton = ({ templateID, page }:ExportButtonProps) =>{
  const [downloading, setDownloading] = useState(false);

  const DOCXExport = async() => {
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
      console.log(response);
      if(response.ok){
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = 'downloaded_file.docx';
        if (contentDisposition){
          const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
          if (filenameMatch && filenameMatch.length > 1){
            filename = filenameMatch[1];
          }
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        console.log(blob);
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        link.remove();
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



    const JSONExport = async() => {
      setDownloading(true);
      const url = '/api/generate-doc';
      try{
        const loader = new PlotLoader();
        const plots = JSON.stringify((await loader.loadPlotsFromTemplate(templateID)).map(x => x.config_file),null,2)
        if (plots.length == 0 ){
          throw new Error();
        }
        const blob = new Blob ([plots], {type: "application/json"})
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download',"configs.json");
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        link.remove();
        setDownloading(false)
      }catch(error){
        console.error('Network Error', error);
        setDownloading(false);
      }
  }

  

  if (page=="home") {
    return(
      <div className="justify-center items-center ">

        <div>
        <button onClick = {DOCXExport} className='text-center w-3/6 '>
          <div className="justify-center flex rounded-s-lg p-2 border-black border-2 relative bg-[#346DFF]">
            <p className="text-slate-50 basis-10/11 whitespace-nowrap overflow-hidden overflow-elipsis" >Export DOCX</p>
          </div>
        </button>
        <button onClick = {JSONExport} className='text-center w-3/6'>
          <div className="justify-center flex rounded-r-lg p-2 border-black border-2 relative bg-[#346DFF]">
            <p className="text-slate-50 basis-10/11 whitespace-nowrap overflow-hidden overflow-elipsis">Export JSON</p>
          </div>
        </button>

        </div>



        {downloading &&(
        <div className="popup text-center">
          Downloading File...
        </div>
        )}
        </div>
    );
  } else if (page=="template") {
    return(
      <div className ="">
        <div className="flex">

            <button onClick = {DOCXExport} className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#7D7D7D] rounded-s-lg flex justify-center items-center border-[2px] border-slate-700`}>
            <p> Export DOCX</p>
          </button>
          <button onClick = {JSONExport} className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#7D7D7D] rounded-r-lg flex justify-center items-center border-[2px] border-slate-700`}>
            <p> Export JSON</p>
          </button>
        </div>

      {downloading &&(
        <div className="popup text-center">
          Downloading File...
        </div>
        )}
      </div>
    )
  }

 }