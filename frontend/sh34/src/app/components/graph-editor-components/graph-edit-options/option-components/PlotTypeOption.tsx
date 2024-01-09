import { OptionComponentTitle } from "./OptionComponentTitle"

export const PlotTypeOption = () => {
    return(
    <div> 

        < OptionComponentTitle optionName="Plot Type" />

        <div className="ml-3">
            <div>
                <input className="mr-2" type="radio" name="PlotTypeSelect" value="Bar" id="Bar"></input>
                <label htmlFor="Bar">Bar</label>
            </div>
            <div>
                <input className="mr-2" type="radio" name="PlotTypeSelect" value="Scatter" id="Scatter"></input>
                <label htmlFor="Bar">Scatter</label>
            </div>
            <div>
                <input className="mr-2" type="radio" name="PlotTypeSelect" value="Pie" id="Pie"></input>
                <label htmlFor="Bar">Line</label>
            </div>
        </div>
        
    </div>
    )
}