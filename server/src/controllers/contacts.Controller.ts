import { Body, Controller, Post } from '@nestjs/common';
import { CreateContactsDto } from '../dto/createEntity.dto';
import { ContactsService } from '../services/contacts.service';

@Controller('/contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  createContact(@Body() body: CreateContactsDto): Promise<any> {
    return this.contactsService.createContact(body);
  }
}
