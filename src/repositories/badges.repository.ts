import { AppDataSource } from "../database/typeorm/postgresqlDataSource";
import { Badge } from "../modules/badges/entities/badge.entity"; 

export const badgesRepository = AppDataSource.getRepository(Badge);