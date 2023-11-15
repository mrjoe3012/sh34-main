const { MongoClient } = require("mongodb");
 
const uri = "mongodb+srv://benclmorrison:sh34password@sh34.xewtebw.mongodb.net/";
 
const client = new MongoClient(uri);
 
async function run() {
 
  try {
 
    // Connect to the "Templates" database and access its "Template_Data" collection
    const database = client.db("Templates");
 
    const collection_Data = database.collection("Template_Data");
 
    // Create a document to insert
 
    const docs = [
      {
      asset_name : "TestnameA",
      num_plots : 2,
      plot_list : []
      },
      {
        asset_name : "TestnameB",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameC",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameD",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameE",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameF",
        num_plots : 6,
        plot_list : []
      },
      {
        asset_name : "TestnameG",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameH",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameI",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameJ",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameK",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameL",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameM",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameN",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameO",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameP",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameQ",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameR",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameS",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameT",
        num_plots : 6,
        plot_list : []
      },
      {
        asset_name : "TestnameU",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameV",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameX",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameY",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameZ",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameAA",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameAB",
        num_plots : 6,
        plot_list : []
      },
      {
        asset_name : "TestnameAC",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameAD",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameAE",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameAF",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameAG",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameAH",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameAI",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameAJ",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameAK",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameAL",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameAM",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameAN",
        num_plots : 8,
        plot_list : []
      },
      {
        asset_name : "TestnameAO",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameAP",
        num_plots : 6,
        plot_list : []
      },
      {
        asset_name : "TestnameAQ",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameAR",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameAS",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameAT",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameAU",
        num_plots : 6,
        plot_list : []
      },
      {
        asset_name : "TestnameAV",
        num_plots : 8,
        plot_list : []
      },
      {
        asset_name : "TestnameAX",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameAY",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameAZ",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameBA",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameBB",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameBC",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameBD",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameBE",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameBF",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameBG",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameBH",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameBI",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameBJ",
        num_plots : 6,
        plot_list : []
      },
      {
        asset_name : "TestnameBK",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameBL",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameBM",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameBN",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameBO",
        num_plots : 6,
        plot_list : []
      },
      {
        asset_name : "TestnameBP",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameBQ",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameBR",
        num_plots : 3,
        plot_list : []
      },
      {
        asset_name : "TestnameBS",
        num_plots : 5,
        plot_list : []
      },
      {
        asset_name : "TestnameBT",
        num_plots : 2,
        plot_list : []
      },
      {
        asset_name : "TestnameBU",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameBV",
        num_plots : 6,
        plot_list : []
      },
      {
        asset_name : "TestnameBW",
        num_plots : 1,
        plot_list : []
      },
      {
        asset_name : "TestnameBX",
        num_plots : 4,
        plot_list : []
      },
      {
        asset_name : "TestnameBY",
        num_plots : 7,
        plot_list : []
      },
      {
        asset_name : "TestnameBZ",
        num_plots : 4,
        plot_list : []
      }
    ]
 
    // Insert the defined document into the "Template_Data" collection
    for (const item of docs) {
      const result = await collection_Data.insertOne(item);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
 
  } finally {
 
     // Close the MongoDB client connection
 
    await client.close();
 
  }
 
}
 
// Run the function and handle any errors
 
run().catch(console.dir);
