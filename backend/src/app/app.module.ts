import { dbConfig } from '../../typeorm.config';
import { Module } from '@nestjs/common';
import { AuthModule } from '../bundles/auth/auth.module';
import { UserModule } from '../bundles/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RealEstateModule } from '../bundles/estate/estate.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RealEstateModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        ...dbConfig,
        migrationsRun: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
