import { Body, Controller, Post } from '@nestjs/common';
import { CreateCompaniesDto } from '../dto/createEntity.dto';
import { CompaniesService } from '../services/companies.service';

@Controller('/companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  createCompany(@Body() body: CreateCompaniesDto): Promise<any> {
    return this.companiesService.createCompany(body);
  }
}
