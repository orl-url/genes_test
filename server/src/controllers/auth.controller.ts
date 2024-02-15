import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Controller('/token')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/:clientId')
  getAccessToken(@Param() clientId: number): Promise<any> {
    return this.authService.getAccessToken(clientId);
  }
}
