import { PlotData } from "@app/modules/db";
import { WithId } from "mongodb";
import { createContext, Dispatch, SetStateAction} from "react";

interface PlotOptionsContextType {
    plotType: string,
    setPlotType: Dispatch<SetStateAction<string>>,
    indicator: string,
    setIndicator: Dispatch<SetStateAction<string>>,
    plot: WithId<PlotData> | null,
    templateId: string,
}
  
export const PlotOptionsContext = createContext<PlotOptionsContextType>({
    plotType: "",
    setPlotType: () => {},
    indicator: "",
    setIndicator: () => {},
    plot: null,
    templateId: "",
});