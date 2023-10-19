import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { estates } from '../seed-data/seed-esatate';

export class Estate1697571112964 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'estate',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'image',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'ticket',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'yield',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'daysLeft',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'sold',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp with time zone',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'timestamp with time zone',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.manager.save('estate', estates);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('estate');
  }
}
