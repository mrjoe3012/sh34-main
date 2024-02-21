import { LoadPlotsFromTemplatesResponseData } from "@app/api/load-plots-from-template/route";
import { WithId } from "mongodb";
import { PlotData } from "plotly.js";

export class PlotLoader {
    constructor() {

    }

    async loadPlotsFromTemplate(id: number): Promise<WithId<PlotData>[]> {
        const dbApiEndpoint = '/api/db/load-plots-from-template';
        try {
            const response = await fetch(dbApiEndpoint, {
                'method' : 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                }),
            });
            if (response.status != 200)
                throw new Error(`Failed to fetch plots for template id: ${id}.`);
            const data: LoadPlotsFromTemplatesResponseData = await response.json();
            return data.plots;
        } catch(e) {
            console.error(e);
            return [];
        }
    }

    async loadPlots(filter: Record<string, any>): Promise<WithId<PlotData>[]> {
        return [];
    }
}