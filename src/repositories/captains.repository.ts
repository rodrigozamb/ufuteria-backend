import { AppDataSource } from "../database/typeorm/postgresqlDataSource";
import { Captain } from "../modules/captains/entities/captain.entity";

export const captainsRepository = AppDataSource.getRepository(Captain);