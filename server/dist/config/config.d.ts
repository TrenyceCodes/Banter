import "dotenv/config";
import { Dialect } from "sequelize";
import pg from "pg";
declare const development: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
    dialectModule: typeof pg;
};
export default development;
//# sourceMappingURL=config.d.ts.map