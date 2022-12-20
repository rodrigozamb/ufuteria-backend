import { AppDataSource } from "../database/typeorm/postgresqlDataSource";
import { User } from "../modules/users/entities/user.entity";

export const usersRepository = AppDataSource.getRepository(User);