const app = require("./app");
// const { testConnection } = require("./sequelize/database");

async function main() {
    await app.listen(app.get("port"));
    console.log("Server on port", app.get("port"));
    // testConnection();
}

main();