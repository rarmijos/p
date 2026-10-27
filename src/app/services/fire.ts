import { Injectable } from '@angular/core';
import { ref, set } from 'firebase/database';
import { db } from './config';

@Injectable({
  providedIn: 'root',
})
export class Fire {
  postPeliculas(pelicula: any) {
    set(ref(db, 'peliculas/' + pelicula.titulo), {
      genero: pelicula.genero,
      duracion: pelicula.duracion,
      anio: pelicula.anio
    });
  }
}
