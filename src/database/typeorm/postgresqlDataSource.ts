import 'reflect-metadata'
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    port: 5432,
    url: process.env.POSTGRESQL_URL,
    entities: [`${__dirname}/../../../**/modules/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/../../../**/database/typeorm/migrations/*.{ts,js}`],
})

