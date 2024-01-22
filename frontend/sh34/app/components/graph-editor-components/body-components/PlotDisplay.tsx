import { useEffect } from "react"
import { useConfig } from "@app/graph-editor/ConfigContext"
import $ from "jquery"

export const PlotDisplay = () => {

    const {config} = useConfig()

    useEffect(()=>{

        // fetch the plot and display it
        fetch('/api/plotfromconfig', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(config),
        })
        .then(response => response.text())
        .then(data => {
          console.log("worked")
          $('#plot-container').html(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[config])

    // Currently just output the config to the console
    const viewConfigJSON = () => {
        console.log(config);
    } 

    return(
        <div id="plot-container" className='basis-[85%] p-16 flex justify-center overflow-auto'>
        </div>
    )
}