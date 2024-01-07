export const AxisLineOption = () => {
    return(
        <div className="mb-10"> 
                <p className="text-xl"> Axis Lines </p>
                <div>
                    <input className="mr-2" type="radio" name="AxisLineSelect" value="X-Axis" id="X-Axis"></input>
                    <label htmlFor="X-Axis">X-Axis</label>
                </div>
                <div>
                    <input className="mr-2" type="radio" name="AxisLineSelect" value="Y-Axis" id="Axis"></input>
                    <label htmlFor="Y-Axis">Y-Axis</label>
                </div>
        </div>
    )
}