import { WithId } from "mongodb";
import { TemplateData } from "./db";
import { LoadTemplatesResponseData } from "@app/api/db/load-templates/route";

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
};