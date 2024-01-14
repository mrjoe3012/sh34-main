import { Filter, MongoClient, WithId } from 'mongodb';

// should be same as objects in Templates_Data collection
export interface TemplateData {
    _id: number;
    PlotArray: Array<number>;
    Name: string;
    Description: string;
    Tags: Array<string>;
    LastModified: string;
};

// should be same as objects in Plots_Data collection
export interface PlotData {
    _id: number,
    JSONFile: {
        'graph-type' : string,
        title: string,
        x_axis_name : string,
        y_axis_name : string,
        colour: string
    },
    plot_title: string,
    order: number,
};

export function getMongoClient(): MongoClient {
    // get the uri from the environment variable
    if (process.env.SH34_DB === undefined) {
        throw new Error("Please set the SH34_DB environment variable to provide access to the MongoDB database.");
    }
    const uri = process.env.SH34_DB!;
    return new MongoClient(
        uri
    );
}

export async function loadTemplates(filter: Filter<TemplateData>) : Promise<WithId<TemplateData>[]> {
    const client = getMongoClient();
    await client.connect();
    const db = client.db("SH34_DB");
    const templateCollection = db.collection<TemplateData>("Templates_Data");
    const templates = await templateCollection.find({}).toArray();
    await client.close();
    return templates;
}
