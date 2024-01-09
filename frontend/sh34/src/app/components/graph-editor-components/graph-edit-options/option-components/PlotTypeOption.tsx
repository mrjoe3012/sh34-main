export const PlotTypeOption = () => {
    return(
    <div className="mb-10"> 
        <p className="text-xl"> Plot Type </p>
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
    )
}