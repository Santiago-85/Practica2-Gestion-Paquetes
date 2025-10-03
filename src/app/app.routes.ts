import { Routes } from '@angular/router';
import { CreateOrder } from './pages/create-order/create-order';
import { UpdateOrder } from './pages/update-order/update-order'; 
import { TrackOrder } from './pages/track-order/track-order';

export const routes: Routes = [
    { path: '', component: CreateOrder },
    { path: 'update', component: UpdateOrder },
    { path: 'track', component: TrackOrder } 
];