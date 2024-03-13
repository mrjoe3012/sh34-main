"use client"
import React, {useState, useEffect} from "react";
import { TemplateData } from "@app/modules/db";

interface AssetElementProps{
    template:TemplateData;
}

export const LastModified = (props: AssetElementProps) => {
    const template = props.template;
    const [lastModifiedDate, setLastModifiedDate] = useState('');

    function timeAgo(dateString: string) {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.round((now.getTime() - date.getTime()) / 1000);
        const minutes = Math.round(seconds / 60);
        const hours = Math.round(minutes / 60);
        const days = Math.round(hours / 24);
        const months = Math.round(days / 30);
        const years = Math.round(days / 365);

        if (seconds < 60) {
          return 'Just Now';
        } else if (minutes < 60) {
          return `${minutes} Minutes Ago`;
        } else if (hours < 24) {
          return `${hours} Hours Ago`;
        } else if (days < 30) {
          return `${days} Days Ago`;
        } else if (months < 12) {
          return `${months} Months Ago`;
        } else {
          return `${years} Years Ago`;
        }
      }

    useEffect(() => {
        const lastModified = new Date(template.LastModified);
        const currentTime = new Date();
        console.log("Last Modified: " + lastModified)
        console.log("Current time: " + currentTime)

        if (lastModified > currentTime || isNaN(lastModified.getTime())) {
            setLastModifiedDate("Invalid date");
        }else{
            setLastModifiedDate(timeAgo(template.LastModified))
        }


        console.log(lastModifiedDate)

    }, []);

    return <h2 className='text-lg'>{lastModifiedDate}</h2>;
};

export default LastModified;