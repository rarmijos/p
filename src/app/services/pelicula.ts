import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Pelicula {

  private API_PELIS = "http://localhost:3000/peliculas"
  
  http = inject(HttpClient)

  getPeliculas(): Observable<any>{
    return this.http.get(this.API_PELIS)
  }
  
}
