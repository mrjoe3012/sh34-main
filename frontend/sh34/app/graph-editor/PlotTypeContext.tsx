import { createContext, Dispatch, SetStateAction} from "react";

interface PlotTypeContextType {
    plotType: string,
    setPlotType: Dispatch<SetStateAction<string>>
}
  
export const PlotTypeContext = createContext<PlotTypeContextType>({
    plotType: "",
    setPlotType: () => {}
});