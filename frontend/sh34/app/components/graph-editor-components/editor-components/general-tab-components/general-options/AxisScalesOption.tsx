import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericTwoButtonOption } from "../../generic-components/GenericTwoButtonOption";
import { useState } from "react";


export const AxisScaleOption = () => {

    const changeXAxisScaleLinear = (inputValue: string) => {
        // Enter logic here for toggling x axis to linear
        console.log("Toggled x-axis scale to " + inputValue);
    }

    const changeXAxisScaleLogarithmic = (inputValue: string) => {
        // Enter logic here for toggling x axis to logarithmic
        console.log("Toggled x-axis scale to " + inputValue);
    }

    const changeYAxisScaleLinear = (inputValue: string) => {
        // Enter logic here for toggling y axis to linear
        console.log("Toggled y-axis scale to " + inputValue);
    }

    const changeYAxisScaleLogarithmic = (inputValue: string) => {
        // Enter logic here for toggling y axis to logarithmic
        console.log("Toggledy-axis scale to " + inputValue);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="X-Axis Scale" />
            <GenericTwoButtonOption firstOptionLabel="Linear" secondOptionLabel="Logarithmic" firstOptionFunction={changeXAxisScaleLinear} secondOptionFunction={changeXAxisScaleLogarithmic} />
            <OptionComponentTitle optionName="Y-Axis Scale" />
            <GenericTwoButtonOption firstOptionLabel="Linear" secondOptionLabel="Logarithmic" firstOptionFunction={changeYAxisScaleLinear} secondOptionFunction={changeYAxisScaleLogarithmic}  />
        </div>
    ) 
}