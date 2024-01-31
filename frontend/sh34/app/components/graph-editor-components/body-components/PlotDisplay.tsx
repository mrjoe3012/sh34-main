import { useEffect } from "react"
import { useConfig } from "@app/graph-editor/ConfigContext"
import ReactLoading from "react-loading"
import $ from "jquery"

export const PlotDisplay = () => {

    const {config} = useConfig()

    useEffect(()=>{

        $('#loading-icon').css("display", "block");

        // fetch the plot and display it
        fetch('/api/plot-from-config', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(config),
        })
        .then(response => response.text())
        .then(data => {
          console.log("Received Plot as HTML")
        // Im sure its dangerous to just be setting unverified HTML into the site but... 
          $('#plot-container').html(data);
          $('#loading-icon').css("display", "none");
        })
        .catch((error) => {
          console.error('Error:', error);
          $('#loading-icon').css("display", "none");
        });
    },[config])

    // Currently just output the config to the console
    const viewConfigJSON = () => {
        console.log(config);
    } 

    return(
      <div className="basis-[110%] flex flex-col justify-center xl:scale-150 lg:scale-75 -z-2 max-w-[75%]">
        <div id="loading-icon" className="fixed ml-4"><ReactLoading type="spin" color="black" height={30} width={30}/></div>
        <div id="plot-container" className="self-center">
        </div>
      </div>

    )
}