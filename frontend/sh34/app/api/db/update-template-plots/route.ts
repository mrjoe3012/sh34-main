import { updatePlots } from '@app/modules/db';
import { WithId } from 'mongodb';
import { PlotData } from '@app/modules/db';


interface RequestData {
    plotsToUpdate: WithId<PlotData>[]
}


export async function POST(request: Request) {
    try {
        const requestData: RequestData = await request.json();
        const plotsToUpdate = requestData.plotsToUpdate;
        await updatePlots(plotsToUpdate);
        return Response.json({
            'status' : 200,
        });
    } catch (e) {
        console.error(e)
        return Response.json({
            'status' : 400,
        });
    }

};