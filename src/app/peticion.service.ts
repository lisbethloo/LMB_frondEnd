import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  url = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  registrarUsuario(arg: string) {
    return this.http.post(`${this.url}/usuario`, arg);
  }
  getUsuario() {
    return this.http.get(`${this.url}/usuario`);
  }
  registrarPublicacion(arg: string) {
    // JSON.stringify({nombre: "dsd"})
    return this.http.post(`${this.url}/publicacion`, arg);
  }
}
