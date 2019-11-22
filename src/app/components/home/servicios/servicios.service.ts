import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  getPublicaciones() {
    return this._httpClient.get(environment.apiBaseUrl + '/publicacion');
  }
}
