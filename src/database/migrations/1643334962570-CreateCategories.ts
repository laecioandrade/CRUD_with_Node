import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1643334962570 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE IF NOT EXISTS categories (categoryId INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(45), description VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }
}
