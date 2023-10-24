import { MigrationInterface, QueryRunner } from 'typeorm';
import { estates } from '../seed-data/seed-estate';

export class SeedEstates1697914963756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save('estates', estates);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.clear('estates');
  }
}
