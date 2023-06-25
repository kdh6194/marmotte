const oracledb = require('oracledb');
const dbconfig = require('../dbconfig');

const Oracle = {
    options : {
        resultSet: true,
        outFormat: oracledb.OUT_FORMAT_OBJECT
    },

    initConn: () => {
        oracledb.initOracleClient(
            {libDir: 'C:/instantclient_19_18'});
    },

    makeConn: async () => {
        try {
            return await oracledb.getConnection(dbconfig.db);
        } catch (e) { console.log(e); }
    },

    closeConn: async (conn) => {
        if (conn) {
            try { await conn.close(); }
            catch (e) { console.log(e); }
        }
    }
}

module.exports = Oracle;
