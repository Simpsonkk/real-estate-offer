import { dataSourceOptions } from '../../typeorm.config';
import { Module } from '@nestjs/common';
import { AuthModule } from '../bundles/auth/auth.module';
import { UserModule } from '../bundles/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstateModule } from '../bundles/estate/estate.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    UserModule,
    EstateModule,
  ],
})
export class AppModule {}
