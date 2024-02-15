import { Injectable } from '@nestjs/common';
import { CreateLeadsDto } from '../dto/createEntity.dto';
import { ApiService } from './api.service';

@Injectable()
export class LeadsService {
  constructor(private readonly apiService: ApiService) {}

  async createDeal(body: CreateLeadsDto): Promise<any> {
    const url = `https://${body.base_domain}/api/v4/leads`;
    const data = body.leads;
    return await this.apiService.post(url, data, body.token);
  }
}
