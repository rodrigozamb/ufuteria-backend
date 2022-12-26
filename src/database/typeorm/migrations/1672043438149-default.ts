import { MigrationInterface, QueryRunner } from "typeorm";

export class default1672043438149 implements MigrationInterface {
    name = 'default1672043438149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "captains" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_d773263e8b3e6b8cbdb5a39d63c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "captains"`);
    }

}
