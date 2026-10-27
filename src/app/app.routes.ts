import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Desarrollador } from './pages/desarrollador/desarrollador';
import { Login } from './pages/login/login';
import { Maratones } from './pages/maratones/maratones';
import { Peliculas } from './pages/peliculas/peliculas';
import { authGuardGuard } from './guards/auth-guard-guard';

export const routes: Routes = [

    {path: "inicio", component:Welcome},
    {path: "desarrolladores", component:Desarrollador},
    {path: "login", component:Login},
    {path: "maratones", component:Maratones, canActivate:[authGuardGuard]},
    {path: "peliculas", component:Peliculas, canActivate:[authGuardGuard]},

];
