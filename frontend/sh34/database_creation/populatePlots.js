async function populatePlots(client) {

    const database = client.db("SH34_DB");
    
    const collection_Data = database.collection("Plots_Data");

    const docs = [
        {
            _id: 1,
            config_file : require("./plot_configs/metered_consum.json"),
            order : 1
        },
        {
            _id: 2,
            config_file : require("./plot_configs/prod_goal_consum.json"),
            order : 2
        }, 
        {
            _id: 3,
            config_file : require("./plot_configs/prod_vs_goal.json"),
            order : 3
        },
        {
            _id: 4,
            config_file : require("./plot_configs/revenue_breakdown.json"),
            order : 1
        },
        {
            _id: 5,
            config_file : require("./plot_configs/wind_and_temp.json"),
            order : 2
        },
    ]

    for (const item of docs) {
        const result = await collection_Data.insertOne(item);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
}

module.exports = {
    populatePlots
};
