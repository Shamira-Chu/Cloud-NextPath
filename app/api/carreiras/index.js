const sql = require("mssql");

module.exports = async function (context, req) {

    const config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        server: process.env.DB_SERVER,
        database: process.env.DB_NAME,
        options: {
            encrypt: true
        }
    };

    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query("SELECT * FROM Carreirasdofuturo");

        context.res = {
            status: 200,
            headers: { "Content-Type": "application/json" },
            body: result.recordset
        };

    } catch (err) {

        context.res = {
            status: 500,
            body: "Erro ao consultar SQL: " + err
        };
    }
};
