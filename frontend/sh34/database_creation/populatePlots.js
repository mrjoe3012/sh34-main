async function populatePlots(client) {

    const database = client.db("SH34_DB");
    
    const collection_Data = database.collection("Plots_Data");

    const docs = [
        {
            _id: 1,
            JSONFile : {
                "graph-type": "scatter",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q1 electricity output",
            order : 1                   
        },

        {
            _id: 2,
            JSONFile : {
                "graph-type": "scatter",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q2 electricity output",
            order : 2            
        },

        {
            _id: 3,
            JSONFile : {
                "graph-type": "scatter",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q3 electricity output",
            order : 3            
        },

        {
            _id: 4,
            JSONFile : {
                "graph-type": "scatter",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q4 electricity output",
            order : 1            
        },

        {
            _id: 5,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q1 uptime",
            order : 2            
        },

        {
            _id: 6,
            JSONFile : {
                "graph-type": "scatter",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q2 uptime",
            order : 3            
        },

        {
            _id: 7,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q3 uptime",
            order : 1            
        },

        {
            _id: 8,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q4 uptime",
            order : 2            
        },

        {
            _id: 9,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q1 lost revenue",
            order : 3            
        },

        {
            _id: 10,
            JSONFile : {
                "graph-type": "pie",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q2 lost revenue",
            order : 1            
        },

        {
            _id: 11,
            JSONFile : {
                "graph-type": "bar",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q3 lost revenue",
            order : 2            
        },

        {
            _id: 12,
            JSONFile : {
                "graph-type": "pie",
                "title": "USA GDP",
                "x_axis_name": "Years",
                "y_axis_name": "GPD (USD) Millions",
                "colour": "purple"
            },
            plot_title : "Q4 lost revenue",
            order : 3            
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
