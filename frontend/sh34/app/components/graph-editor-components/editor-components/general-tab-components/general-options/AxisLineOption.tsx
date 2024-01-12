import { OptionComponentTitle } from "../../OptionComponentTitle"

export const AxisLineOption = () => {
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Axis Lines" />
                <div className="ml-3">
                    <div>
                        <input className="mr-2" type="radio" name="AxisLineSelect" value="X-Axis" id="X-Axis"></input>
                        <label htmlFor="X-Axis">X-Axis</label>
                    </div>
                    <div>
                        <input className="mr-2" type="radio" name="AxisLineSelect" value="Y-Axis" id="Axis"></input>
                        <label htmlFor="Y-Axis">Y-Axis</label>
                    </div>
                </div>
        </div>
    )
}