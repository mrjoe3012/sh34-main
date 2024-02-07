'use client';
import { useState } from "react";
import { useHomePageContext } from "@app/home/HomePageContext";

export const SortButton = () => {
    console.log("SortButton");
    const {templates, setTemplates} = useHomePageContext();
    const [ascendingClicked, setAscendingClicked] = useState(true);
    const [descendingClicked, setDescendingClicked] = useState(false);
      
    const handleAscendingClick = () => {
      console.log(templates);
      setTemplates([...templates.sort((a, b) => a.Name.localeCompare(b.Name))]);
      console.log(templates);
      setAscendingClicked(true);
      setDescendingClicked(false);
    }
  
    const handleDescendingClick = () => {
      setTemplates([...templates.sort((b,a) => a.Name.localeCompare(b.Name))]);
      console.log(templates);
      setAscendingClicked(false);
      setDescendingClicked(true);
    }
  
      return(
          <div className='flex flex-row bg-[#EAEAEA] w-[200px] h-[35px] justify-center rounded-xl'>
            <button className={`h-full w-[50%] flex justify-center items-center font-sm ${ascendingClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleAscendingClick}> Ascending </button>
            <div className='bg-[#D5D5D5] w-1 h-[80%] self-center'></div>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center ${descendingClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleDescendingClick}>Descending</button>
          </div>
      );
  }