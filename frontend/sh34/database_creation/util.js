function getConnectionString() {
    if (process.env.SH34_DB != undefined) {
        return process.env.SH34_DB;
    } else {
        console.log("Warning, SH34_DB is unset. Using a default connection string.");
        return "mongodb+srv://joe:joe@sh34.xewtebw.mongodb.net/";
    }
}

module.exports = {
    getConnectionString
};
