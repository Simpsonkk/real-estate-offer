import { Controller, Get, UseGuards } from '@nestjs/common';
import { EstateService } from './estate.service';
import { ApiPath } from '../../common/enums/api-path.enum';
import { EstateApiPath } from './enums/auth-api-path.enum';
import { JwtGuard } from '../auth/guards/guards';

@UseGuards(JwtGuard)
@Controller(ApiPath.ESTATES)
export class EstateController {
  constructor(private readonly realEstateService: EstateService) {}

  @Get(EstateApiPath.ROOT)
  getAll() {
    return this.realEstateService.findAll();
  }
}
