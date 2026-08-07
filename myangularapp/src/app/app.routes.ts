import { Routes } from '@angular/router';
import { Fetchdata } from './pages/fetchdata/fetchdata';
import { Header } from './pages/header/header';

export const routes: Routes = [
    {
        path: 'fetchdata',
        component: Fetchdata
    },
    {
        path:'header',
        component:Header
    }
];
