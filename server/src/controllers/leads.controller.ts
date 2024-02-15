import { Body, Controller, Post } from '@nestjs/common';
import { LeadsService } from '../services/leads.service';
import { CreateLeadsDto } from '../dto/createEntity.dto';

@Controller('/leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  createDeal(@Body() body: CreateLeadsDto): Promise<any> {
    return this.leadsService.createDeal(body);
  }
}
