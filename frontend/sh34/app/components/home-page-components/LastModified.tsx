"use client"
import React, {useState, useEffect} from "react";
import { TemplateData } from "@app/modules/db";

interface AssetElementProps{
    template:TemplateData;
}

export const LastModified = (props: AssetElementProps) => {
    const template = props.template;
    const [lastModifiedDate, setLastModifiedDate] = useState('');




    useEffect(() => {
        const lastModified = new Date(template.LastModified);
        const currentTime = new Date();



        if (lastModified > currentTime || isNaN(lastModified.getTime())) {
            setLastModifiedDate("Invalid date");
        }else{
            const timeDifferenceInSeconds = (currentTime.getTime() - lastModified.getTime()) /1000 ;

        // Calculate years
        const years = Math.floor(timeDifferenceInSeconds / (365 * 24 * 60 * 60));
        // Remove years from the time difference
        let remainingSeconds = timeDifferenceInSeconds - years * (365 * 24 * 60 * 60);


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
                formattedTimeDifference = `Over ${years} Year${years > 1 ? 's' : ''} Ago`;
            }else if(years === 1 && months <= 1){
                formattedTimeDifference = 'A Year Ago'
            }else if (months > 1){
                formattedTimeDifference = `Over ${months} Month${months > 1 ? 's' : ''} Ago`;
            }else if (months === 1 && weeks <= 1){
                formattedTimeDifference = `A Month Ago`;
            }else if (weeks > 1 && days <= 1){
                formattedTimeDifference = `Over ${weeks} Week${weeks > 1 ? 's' : ''} Ago`;
            }else if (weeks === 1 && days <= 1){
                formattedTimeDifference = `A Week Ago`;
            }else if (days > 1){
                formattedTimeDifference = `Over ${days} Day${days > 1 ? 's' : ''} Ago`;
            }else if (days === 1 && hours <= 2){
                formattedTimeDifference = `A Day Ago`;
            }else if (hours > 1){
                formattedTimeDifference = `Over ${hours} Hour${hours > 1 ? 's' : ''} Ago`;
            }else if (hours === 1 && minutes <= 5){
                formattedTimeDifference = `An Hour Ago`;
            }else if (minutes > 1){
                formattedTimeDifference = `Over ${minutes} Minute${minutes > 1 ? 's' : ''} Ago`;
            }else{
                formattedTimeDifference = `Just Now`;
            }
            setLastModifiedDate(formattedTimeDifference);
        }
    }, [template.LastModified]);

    return <h2 className='text-lg'>{lastModifiedDate}</h2>;
};

export default LastModified;