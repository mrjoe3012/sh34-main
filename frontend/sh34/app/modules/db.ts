import { MongoClient } from 'mongodb';

// should be same as objects in Templates_Data collection
export interface TemplateData {
    _id: string;
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
    type: string
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
