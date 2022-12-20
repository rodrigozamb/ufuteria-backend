import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669234761054 implements MigrationInterface {
    name = 'default1669234761054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_status_enum" AS ENUM('inactive', 'active')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "data_nasc" TIMESTAMP NOT NULL, "curso" character varying NOT NULL, "fone" character varying NOT NULL, "apelido" character varying NOT NULL, "cpf" character varying NOT NULL, "plan" character varying NOT NULL, "data_associacao" TIMESTAMP NOT NULL, "status" "public"."users_status_enum" NOT NULL DEFAULT 'inactive', "foto_url" character varying NOT NULL, CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "badges" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "foto_url" character varying NOT NULL, CONSTRAINT "PK_8a651318b8de577e8e217676466" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_badges" ("usersId" uuid NOT NULL, "badgesId" uuid NOT NULL, CONSTRAINT "PK_72d146cb1deb96e41c36142e603" PRIMARY KEY ("usersId", "badgesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e8c4bd6b4eb3c6b73155717e5b" ON "user_badges" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a4166589d4c2bceeb99bc3680d" ON "user_badges" ("badgesId") `);
        await queryRunner.query(`ALTER TABLE "user_badges" ADD CONSTRAINT "FK_e8c4bd6b4eb3c6b73155717e5b3" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_badges" ADD CONSTRAINT "FK_a4166589d4c2bceeb99bc3680db" FOREIGN KEY ("badgesId") REFERENCES "badges"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_badges" DROP CONSTRAINT "FK_a4166589d4c2bceeb99bc3680db"`);
        await queryRunner.query(`ALTER TABLE "user_badges" DROP CONSTRAINT "FK_e8c4bd6b4eb3c6b73155717e5b3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a4166589d4c2bceeb99bc3680d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e8c4bd6b4eb3c6b73155717e5b"`);
        await queryRunner.query(`DROP TABLE "user_badges"`);
        await queryRunner.query(`DROP TABLE "badges"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_status_enum"`);
    }

}
