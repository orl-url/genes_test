import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async getAccessToken(clientId: number): Promise<any> {
    const url = 'https://test.gnzs.ru/oauth/get-token.php';
    const config: object = {
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': clientId,
      },
    };

    const response = await firstValueFrom(
      this.httpService.get<any>(url, config),
    );

    return response.data;
  }
}
