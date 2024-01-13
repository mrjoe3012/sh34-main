function getConnectionString() {
    if (process.env.SH34_DB != undefined) {
        return process.env.SH34_DB;
    } else {
        console.log("Warning, SH34_DB is unset. Using a default connection string.");
        return "mongodb+srv://2663826o:Ghostface321@sh34.zgnuc0z.mongodb.net/?retryWrites=true&w=majority";
    }
}

module.exports = {
    getConnectionString
};
