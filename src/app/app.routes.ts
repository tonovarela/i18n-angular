import { Routes } from '@angular/router';

export const routes: Routes = [
{path:'productos', loadComponent:()=>import('./pages/productos/productos.component') },
{path:'basic-plan', loadComponent:()=>import('./pages/basic-plan/basic-plan.component') },
{path:'**', redirectTo: 'productos' }
];
