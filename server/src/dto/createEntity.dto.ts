class AuthDto {
  base_domain: string;
  token: string;
}

export class CreateLeadsDto extends AuthDto {
  leads: [];
}

export class CreateContactsDto extends AuthDto {
  contacts: [];
}

export class CreateCompaniesDto extends AuthDto {
  companies: [];
}
