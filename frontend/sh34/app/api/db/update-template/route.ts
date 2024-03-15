import { loadTemplates, updateTemplates } from '@app/modules/db';
import { WithId } from 'mongodb';
import { TemplateData } from '@app/modules/db';


interface RequestData {
    templateID: number;
    newTemplate: WithId<TemplateData>
}


// Request takes in a TemplateID
// Finds corresponding Template in DB and updates it.
export async function POST(request: Request) {
    const requestData: RequestData = await request.json();
    const templates = await loadTemplates({'_id' : requestData.templateID});
    if (templates.length != 1) {
        let response = Response.json(
            {'error' : 'Nonexistent template ID.'},
            { 'status' : 400 }
        );
        return response;
    }
    let template = templates[0];
    template = requestData.newTemplate

    await updateTemplates([template]);
    return new Response();
};