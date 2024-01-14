import { MongoClient, Db } from 'mongodb';
import { getMongoClient, PlotData, loadTemplates } from '@app/modules/db';

const DBTesting = async () => {
    const client = getMongoClient();
    await client.connect();
    const templates = await loadTemplates({});
    const plotsCollection = client.db("SH34_DB").collection<PlotData>("Plots_Data");
    const plots = await plotsCollection.find({}).toArray();
    return (
        <div>
            <div className='bg-white border text-black h-screen border-1 border-black'>
                <h1 className='text-xl'>Templates_Data</h1>
                <table className='border-1'>
                    <tr key="headings">
                        <th key="index">index</th>
                        {Object.keys(templates[0]).map((name, idx) => {
                            return <th key={idx}>{name}</th>
                        })}
                    </tr>
                    {templates.map((template, idx) => {
                        return (
                            <tr key={idx}>
                                <td key="index">{idx}</td>
                                {Object.values(template).map((value, idx) => {
                                    return <td key={idx}>{value}</td>
                                })}
                            </tr>
                        )
                    })}
                </table>
                <hr />
                <h1 className='text-xl'>Plots_Data</h1>
                <table>
                    <tr key="headings">
                        <td key="index">index</td>
                        {Object.keys(plots[0]).map((name, idx) => {
                            return <td key={idx}>{name}</td>
                        })}
                    </tr>
                    {plots.map((plot, idx) => {
                        return <tr key={idx}>
                            <td>{idx}</td>
                            {Object.values(plot).map((val, idx) => {
                            return <td key={idx}>{val.toString()}</td>
                            })}
                        </tr>
                    })}
                </table>
            </div>
        </div>
    );
}

export default DBTesting;
