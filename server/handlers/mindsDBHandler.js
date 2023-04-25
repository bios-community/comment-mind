import MindsDB from "mindsdb-js-sdk";
import dotenv from "dotenv";

dotenv.config();

const MINDSDB_EMAIL = process.env.MINDSDB_EMAIL;
const MINDSDB_PASSWORD = process.env.MINDSDB_PASSWORD;

await MindsDB.default.connect({
	user: MINDSDB_EMAIL,
	password: MINDSDB_PASSWORD,
});

const allDatabases = await MindsDB.default.Databases.getAllDatabases();
console.log(allDatabases);