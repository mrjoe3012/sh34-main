import { WithId } from "mongodb";
import { TemplateData } from "./db";
import { LoadTemplatesResponseData } from "@app/api/db/load-templates/route";
import { LoadTemplateFromPlotResponseData } from "@app/api/db/load-template-from-plot/route";

// uses the api route load templates
export class TemplateLoader {
    constructor() {
    }

    async loadTemplates(filter: Record<string, any>): Promise<WithId<TemplateData>[]> {
        const dbApiEndpoint = '/api/db/load-templates';
        try {
            const response = await fetch(dbApiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'appliation/json',
                },
                body: JSON.stringify({
                    filter: filter,
                }),
            });
            if (response.status != 200) {
                throw new Error(`Failed to fetch templates. Status code: ${response.status}`);
            }
            const data: LoadTemplatesResponseData = await response.json();
            return data.templates;
        } catch(e) {
            console.error(e);
            return [];
        }
    }

    async loadTemplateFromPlot(id: number): Promise<WithId<TemplateData> | null> {
        const dbApiEndpoint = '/api/db/load-template-from-plot';
        try {
            const response = await fetch(dbApiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'appliation/json',
                },
                body: JSON.stringify({
                    id: id
                }),
            });
            if (response.status != 200) {
                throw new Error(`Failed to fetch plot from template. Status code: ${response.status}`);
            }
            const data: LoadTemplateFromPlotResponseData = await response.json();
            return data.template;
        } catch(e) {
            console.error(e);
            return null;
        }
    }
};
