import 'reflect-metadata'
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRESQL_HOST,
    port: 5432,
    username: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
    entities: [`${__dirname}/../../../**/modules/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/../../../**/database/typeorm/migrations/*.{ts,js}`],
})

