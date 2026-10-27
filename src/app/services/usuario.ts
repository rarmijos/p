import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Usuario {
  
  private API_USER = "http://localhost:3000/usuarios"
  http = inject(HttpClient)

  getUsuario(): Observable<any>{
    return this.http.get(this.API_USER)
  }

}
