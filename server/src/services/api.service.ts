import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  private readonly createConfig;

  constructor(private readonly httpService: HttpService) {
    this.createConfig = function (token) {
      return {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
    };
  }

  async get(url, token) {
    const config = this.createConfig(token);
    const response = await firstValueFrom(
      this.httpService.get<any>(url, config),
    );
    return response.data;
  }

  async post(url, data, token) {
    const config = this.createConfig(token);
    const response = await firstValueFrom(
      this.httpService.post<any>(url, data, config),
    );
    return response.data;
  }
}
