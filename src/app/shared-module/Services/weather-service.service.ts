import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  environment: string = environment.apiUrl;

  constructor(private link: HttpClient) {}
  get_data() {}
}
