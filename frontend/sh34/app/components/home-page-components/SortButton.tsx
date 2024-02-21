'use client';
import { useState } from "react";
import { useEffect } from "react";
import { useHomePageContext } from "@app/home/HomePageContext";

interface SortButtonProps {
  selectedOption: string;
}

function stringToDate(datestr: string): Date {
  const elements = datestr.split("/").map((x) => Number.parseInt(x));
  return new Date(elements[2], elements[1]-1, elements[0]);
}

function dateCmp(d1: Date, d2: Date): number {
  if (d1 > d2)
    return 1;
  else if (d1 < d2)
    return -1;
  else
    return 0;
}

export const SortButton = (props: SortButtonProps) => {
    const { selectedOption } = props;
    const {templates, setTemplates, needSorting, setNeedSorting} = useHomePageContext();
    const [ascendingClicked, setAscendingClicked] = useState(true);
    const [descendingClicked, setDescendingClicked] = useState(false);
      
    const handleAscendingClick = () => {
      if (selectedOption === "_id") {
        setTemplates([...templates.sort((a, b) => a._id - b._id)]);
      } else if (selectedOption === "Name") { 
        setTemplates([...templates.sort((a, b) => a.Name.localeCompare(b.Name))]);
      } else if (selectedOption === "DateCreated") {
        setTemplates(
          [...templates.sort((a, b) => dateCmp(stringToDate(a.DateCreated), stringToDate(b.DateCreated)))]
        );
      } else if (selectedOption === "LastModified") {
        setTemplates(
          [...templates.sort((b, a) => dateCmp(new Date(Date.parse(a.LastModified)), new Date(Date.parse(b.LastModified))))]
        );
      }
      setAscendingClicked(true);
      setDescendingClicked(false);
    }
  
    const handleDescendingClick = () => {
      if (selectedOption === "_id") {
        setTemplates([...templates.sort((b,a) => a._id - b._id)]);
      } else if (selectedOption === "Name") { 
        setTemplates([...templates.sort((b,a) => a.Name.localeCompare(b.Name))]);
      } else if (selectedOption === "DateCreated") {
        setTemplates(
          [...templates.sort((b, a) => dateCmp(stringToDate(a.DateCreated), stringToDate(b.DateCreated)))]
        )
      } else if (selectedOption === "LastModified") {
        setTemplates(
          [...templates.sort((a, b) => dateCmp(new Date(Date.parse(a.LastModified)), new Date(Date.parse(b.LastModified))))]
        );
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
  
    // sort if the templates are modified
    useEffect(() => {
      setNeedSorting(false);
      if (ascendingClicked)
        handleAscendingClick();
      else
        handleDescendingClick();
    }, [needSorting])

      return(
          <div className='flex flex-row bg-[#EAEAEA] w-[200px] h-[35px] justify-center rounded-xl'>
            <button className={`h-full w-[50%] flex justify-center items-center font-sm ${ascendingClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleAscendingClick}> Ascending </button>
            <div className='bg-[#D5D5D5] w-1 h-[80%] self-center'></div>
            <button className={`h-full mr-1 w-[50%] flex justify-center items-center ${descendingClicked ? 'underline underline-offset-4 decoration-[#346DFF] decoration-4' : ''}`} onClick={handleDescendingClick}>Descending</button>
          </div>
      );
  }