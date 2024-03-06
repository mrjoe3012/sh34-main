'use client';
import { PlotLoader } from "@app/modules/PlotLoader";
import { error } from "console";
import { useState } from "react";
import ExportIcon from "@app/images/export-icon.svg"
import Image from "next/image";

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

        <div className="flex flex-row gap-x-1">
        <button onClick = {DOCXExport} className='text-center w-3/6 '>
          <div className="justify-center flex rounded-lg p-2 border-black  relative bg-[#346DFF] hover:bg-[#5887ff] gap-x-2  h-[45px] items-center">
            <Image src={ExportIcon} alt="export" className="text-white w-5 h-5"/>
            <p className="text-slate-50 basis-10/11 whitespace-nowrap overflow-hidden overflow-elipsis" >DOCX</p>
          </div>
        </button>
        <button onClick = {JSONExport} className='text-center w-3/6'>
          <div className="justify-center flex rounded-lg p-2 border-black relative bg-[#346DFF] hover:bg-[#5887ff] gap-x-2 h-[45px] items-center">
            <Image src={ExportIcon} alt="export" className="text-white w-5 h-5"/>
            <p className="text-slate-50 basis-10/11 whitespace-nowrap overflow-hidden overflow-elipsis">JSON</p>
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
        <div className="flex gap-x-1">
          <button onClick = {DOCXExport} className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#346DFF] hover:bg-[#5887ff] rounded-lg flex gap-x-2 justify-center items-center border-[0px] border-slate-700`}>
            <Image src={ExportIcon} alt="export" className="text-white w-5 h-5"/>
            <p>DOCX</p>
          </button>
          <button onClick = {JSONExport} className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#346DFF] hover:bg-[#5887ff] rounded-lg flex gap-x-2 justify-center items-center border-[0px] border-slate-700`}>
            <Image src={ExportIcon} alt="export" className="text-white w-5 h-5"/>
            <p>JSON</p>
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