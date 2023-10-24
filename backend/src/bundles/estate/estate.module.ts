import { Module } from '@nestjs/common';
import { EstateService } from './estate.service';
import { EstateController } from './estate.controller';
import { Estate } from './estate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estate])],
  controllers: [EstateController],
  providers: [EstateService],
})
export class EstateModule {}
