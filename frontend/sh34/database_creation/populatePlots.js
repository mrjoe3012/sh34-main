async function populatePlots(client) {

    const database = client.db("SH34_DB");
    
    const collection_Data = database.collection("Plots_Data");

    const docs = [
        {
            _id : 1,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q1 electricity output",
            order : 1,
            type : "scatter"       
        },

        {
            _id : 2,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q2 electricity output",
            order : 2,
            type : "scatter"
        },

        {
            _id : 3,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q3 electricity output",
            order : 3,
            type : "scatter"
        },

        {
            _id : 4,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q4 electricity output",
            order : 1,
            type : "scatter"
        },

        {
            _id : 5,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q1 uptime",
            order : 2,
            type : "bar"
        },

        {
            _id : 6,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q2 uptime",
            order : 3,
            type : "scatter"
        },

        {
            _id : 7,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q3 uptime",
            order : 1,
            type : "bar"
        },

        {
            _id : 8,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q4 uptime",
            order : 2,
            type : "bar"
        },

        {
            _id : 9,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q1 lost revenue",
            order : 3,
            type : "bar"
        },

        {
            _id : 10,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q2 lost revenue",
            order : 1,
            type : "pie"
        },

        {
            _id : 11,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q3 lost revenue",
            order : 2,
            type : "bar"
        },

        {
            _id : 12,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q4 lost revenue",
            order : 3,
            type : "pie"
        }
        
    ]

    for (const item of docs) {
        const result = await collection_Data.insertOne(item);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
}

module.exports = {
    populatePlots
};
