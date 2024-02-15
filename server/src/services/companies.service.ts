import { Injectable } from '@nestjs/common';
import { CreateCompaniesDto } from '../dto/createEntity.dto';
import { ApiService } from './api.service';

@Injectable()
export class CompaniesService {
  constructor(private readonly apiService: ApiService) {}
  async createCompany(body: CreateCompaniesDto): Promise<any> {
    const url = `https://${body.base_domain}/api/v4/companies`;
    const data = body.companies;
    return await this.apiService.post(url, data, body.token);
  }
}
