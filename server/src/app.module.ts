import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LeadsService } from './services/leads.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { ContactsController } from './controllers/contacts.Controller';
import { CompaniesController } from './controllers/companies.controller';
import { ContactsService } from './services/contacts.service';
import { CompaniesService } from './services/companies.service';
import { LeadsController } from './controllers/leads.controller';
import { ApiService } from './services/api.service';

@Module({
  imports: [HttpModule],
  controllers: [
    AuthController,
    LeadsController,
    ContactsController,
    CompaniesController,
  ],
  providers: [
    ApiService,
    AuthService,
    LeadsService,
    ContactsService,
    CompaniesService,
  ],
})
export class AppModule {}
