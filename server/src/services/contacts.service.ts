import { Injectable } from '@nestjs/common';
import { CreateContactsDto } from '../dto/createEntity.dto';
import { ApiService } from './api.service';

@Injectable()
export class ContactsService {
  constructor(private readonly apiService: ApiService) {}
  async createContact(body: CreateContactsDto): Promise<any> {
    const url = `https://${body.base_domain}/api/v4/contacts`;
    const data = body.contacts;
    return await this.apiService.post(url, data, body.token);
  }
}
