import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVideos1643337445538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE IF NOT EXISTS videos (videoId INT NOT NULL PRIMARY KEY AUTO_INCREMENT, categoryId INT, name VARCHAR(45), description VARCHAR(255), duration TIME, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (categoryId) REFERENCES categories (categoryId));'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos");
    }

}
