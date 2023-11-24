const { MongoClient } = require("mongodb");
 
const uri = "mongodb+srv://benclmorrison:sh34password@sh34.xewtebw.mongodb.net/";
 
const client = new MongoClient(uri);

const base64Logo = btoa("images/greenCompanyLogo.png");
const ukFlag = btoa("images/UK_flag.png");

async function run() {
    try {
        const database = client.db("Templates");
    
        const template_data = database.collection("Template_Data");
        const company_data = database.collection("Company_Data");
        const asset_data = database.collection("Asset_Data");
    
        const company_insert =  {
            company_name : "A really green company",
            assets : 1,
            company_logo : {
                format : "png",
                width : "200",
                height : "200",
                data : base64Logo
            }
        }
    
        const asset_insert = {
            asset_name : "very_windy_farm",
            id : "4f6bdd08d9",
            company_name : "A really green company",
            type : "Wind Farm",
            location : {
                lat: 53.8488,
                lng: -0.6028,
                data : ukFlag,
                format : "png",
                width : "200",
                height : "200"
            },
            generator_type : "turbine",
            equipment_summary : "5 x V80-5.0MW",
            
        }
    
        const template_insert = {
            asset_name : "very windy farm",
            num_plots : 4,
            plot_list : []
        }
    
        const result1 = await company_data.insertOne(company_insert);
        console.log(`A document was inserted with the _id: ${result1.insertedId}`);
        const result2 = await asset_data.insertOne(asset_insert);
        console.log(`A document was inserted with the _id: ${result2.insertedId}`);
        const result3 = await template_data.insertOne(template_insert);
        console.log(`A document was inserted with the _id: ${result3.insertedId}`);
    
    } finally {
     
        // Close the MongoDB client connection
    
       await client.close();
    
     }  
}

run().catch(console.dir);