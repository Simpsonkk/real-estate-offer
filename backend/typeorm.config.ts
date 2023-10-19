import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Estate } from './src/bundles/estate/estate.entity';
import { User } from './src/bundles/users/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();

export const dbConfig = {
  type: 'postgres',
  host: configService.getOrThrow('DB_HOST'),
  port: configService.getOrThrow('DB_PORT'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  database: configService.getOrThrow('DB_NAME'),
  migrations: ['dist/src/db/migrations/**'],
  entities: [User, Estate],
} as DataSourceOptions;

export const dataSource = new DataSource(dbConfig);
