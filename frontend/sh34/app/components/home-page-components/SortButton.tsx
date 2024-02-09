'use client';
import { useState } from "react";
import { useEffect } from "react";
import { useHomePageContext } from "@app/home/HomePageContext";

interface SortButtonProps {
  selectedOption: string;
}

export const SortButton = (props: SortButtonProps) => {
    const { selectedOption } = props;
    const {templates, setTemplates} = useHomePageContext();
    const [ascendingClicked, setAscendingClicked] = useState(true);
    const [descendingClicked, setDescendingClicked] = useState(false);
      
    const handleAscendingClick = () => {
      if (selectedOption === "_id") {
        setTemplates([...templates.sort((a, b) => String(a._id).localeCompare(String(b._id)))]);
      } else if (selectedOption === "Name") { 
        setTemplates([...templates.sort((a, b) => a.Name.localeCompare(b.Name))]);
      } else if (selectedOption === "DateCreated") {
        setTemplates([...templates.sort((b,a) => a.DateCreated.localeCompare(b.DateCreated))]);
      } else if (selectedOption === "LastModified") {
        setTemplates([...templates.sort((b,a) => a.LastModified.localeCompare(b.LastModified))]);
      }
      setAscendingClicked(true);
      setDescendingClicked(false);
    }
  
    const handleDescendingClick = () => {
      if (selectedOption === "_id") {
        setTemplates([...templates.sort((b,a) => String(a._id).localeCompare(String(b._id)))]);
      } else if (selectedOption === "Name") { 
        setTemplates([...templates.sort((b,a) => a.Name.localeCompare(b.Name))]);
      } else if (selectedOption === "DateCreated") {
        setTemplates([...templates.sort((a,b) => a.DateCreated.localeCompare(b.DateCreated))]);
      } else if (selectedOption === "LastModified") {
        setTemplates([...templates.sort((a,b) => a.LastModified.localeCompare(b.LastModified))]);
      }
      setAscendingClicked(false);
      setDescendingClicked(true);
    }
    // use effect to sort the templates based on the selected option in Ascending order or descending order
    useEffect(() => {
      if (selectedOption === "LastModified" || selectedOption === "DateCreated") {
        handleDescendingClick();
      }else {
      handleAscendingClick();
      }
    }, [selectedOption]);

      return(
          <div className='flex flex-row bg-[#EAEAEA] w-[200px] h-[35px] justify-center rounded-xl'>
            <button className={`h-full w-[50%] flex justify-center items-center font-sm ${ascendingClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleAscendingClick}> Ascending </button>
            <div className='bg-[#D5D5D5] w-1 h-[80%] self-center'></div>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center ${descendingClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleDescendingClick}>Descending</button>
          </div>
      );
  }