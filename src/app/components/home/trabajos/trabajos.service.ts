import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  routeParams: any;
  product: any;
  onPublicacionChanged: BehaviorSubject<any>;
  constructor(
      // tslint:disable-next-line: variable-name
      private _httpClient: HttpClient,
      // private _authService: AuthService
  ) {
      // Set the defaults
      this.onPublicacionChanged = new BehaviorSubject({});
  }


  getPublicaciones() {
    return this._httpClient.get(environment.apiBaseUrl + '/publicacion');
  }

}
