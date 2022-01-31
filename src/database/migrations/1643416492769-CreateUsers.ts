import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1643416492769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {  // criacao da tabale
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",  // id unico universal
                        isPrimary: true  
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {  // quando quer voltar a trás na tabela
        await queryRunner.dropTable("users");
    }

}
