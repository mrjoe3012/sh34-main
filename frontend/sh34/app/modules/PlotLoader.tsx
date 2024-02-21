import { LoadPlotsFromTemplatesResponseData } from "@app/api/db/load-plots-from-template/route";
import { LoadPlotsResponseData } from "@app/api/db/load-plots/route";
import { WithId } from "mongodb";
import { PlotData } from "./db";

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
        const dbApiEndpoint = "/api/db/load-plots";
        try {
            const response = await fetch(dbApiEndpoint, {
                'method' : 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    filter: filter
                }),
            });
            if (response.status != 200)
                throw new Error(`Failed to fetch plots. Status: ${response.status}`);
            const data: LoadPlotsResponseData = await response.json();
            return data.plots;
        } catch(e) {
            console.error(e);
            return [];
        }
    }
}