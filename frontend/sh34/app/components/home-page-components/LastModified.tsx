"use client"
import React, {useState, useEffect} from "react";
import { TemplateData } from "@app/modules/db";

interface AssetElementProps{
    template:TemplateData;
}

export const LastModified = (props: AssetElementProps) => {
    const template = props.template;
    const [lastModifiedDate, setLastModifiedDate] = useState('');

    console.log("Last Modified Date:", template.LastModified);
    console.log("Date Now:", new Date());



    useEffect(() => {
        const lastModified = new Date(template.LastModified);
        const currentTime = new Date();

        if (lastModified > currentTime || isNaN(lastModified.getTime())) {
            setLastModifiedDate("Invalid date");
        }else{
            const timeDifferenceInSeconds = Math.abs(currentTime.getTime() - lastModified.getTime()) ;
            console.log(timeDifferenceInSeconds);
        // Calculate years
        const years = (timeDifferenceInSeconds / (365 * 24 * 60 * 60));
        // Remove years from the time difference
        let remainingSeconds = timeDifferenceInSeconds - years * (365 * 24 * 60 * 60);
        console.log(years);

        // Calculate months based on 30 days per month
        const months = Math.floor(remainingSeconds / (30 * 24 * 60 * 60));
        // Remove months from the remaining time difference
        remainingSeconds -= months * (30 * 24 * 60 * 60);

        // Calculate weeks based on 7 days per week
        const weeks = Math.floor(remainingSeconds / (7 * 24 * 60 * 60));
        // Remove weeks from the remaining time difference
        remainingSeconds -= weeks * (7 * 24 * 60 * 60);

        // Calculate days based on 24 hours per day
        const days = Math.floor(remainingSeconds / (24 * 60 * 60));
        // Remove days from the remaining time difference
        remainingSeconds -= days * (24 * 60 * 60);

        // Calculate hours based on 60 minutes per hour
        const hours = Math.floor(remainingSeconds / (60 * 60));
        // Remove hours from the remaining time difference
        remainingSeconds -= hours * (60 * 60);

        // Calculate minutes based on 60 seconds per minute
        const minutes = Math.floor(remainingSeconds / 60);

        let formattedTimeDifference = '';

            if (years > 1){
                formattedTimeDifference = `over ${years} year${years > 1 ? 's' : ''} ago`;
            }else if (months > 1){
                formattedTimeDifference = `over ${months} month${months > 1 ? 's' : ''} ago`;
            }else if (months === 1){
                formattedTimeDifference = `a month ago`;
            }else if (weeks > 1){
                formattedTimeDifference = `over ${weeks} week${weeks > 1 ? 's' : ''} ago`;
            }else if (weeks === 1){
                formattedTimeDifference = `a week ago`;
            }else if (days > 1){
                formattedTimeDifference = `over ${days} day${days > 1 ? 's' : ''} ago`;
            }else if (days === 1){
                formattedTimeDifference = `a day ago`;
            }else if (hours > 1){
                formattedTimeDifference = `over ${hours} hour${hours > 1 ? 's' : ''} ago`;
            }else if (hours === 1){
                formattedTimeDifference = `an hour ago`;
            }else if (minutes > 1){
                formattedTimeDifference = `over ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
            }else if (minutes === 1){
                formattedTimeDifference = `a minute ago`;
            }else{
                formattedTimeDifference = `just now`;
            }
            setLastModifiedDate(formattedTimeDifference);
        }
    }, [template.LastModified]);

    return <h2 className='text-lg'>{lastModifiedDate}</h2>;
};

export default LastModified;