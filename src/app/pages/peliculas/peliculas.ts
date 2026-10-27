import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Pelicula } from '../../services/pelicula';
import { Fire } from '../../services/fire';

@Component({
  selector: 'app-peliculas',
  imports: [CommonModule, FormsModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas {

  servicio = inject(Pelicula);

  mensajes = this.servicio.getPeliculas();

  cerrar(){
    localStorage.removeItem("login")
  }

}
