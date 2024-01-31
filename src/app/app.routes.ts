import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'dog', loadComponent: () => import('./feature/dog/dog.component').then(m => m.DogComponent) },
    { path: 'bird', loadComponent: () => import('./feature/bird/bird.component').then(m => m.BirdComponent)},
    { path: 'fish', loadComponent: () => import('./feature/fish/fish.component').then(m => m.FishComponent)}
];
