import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    }
];
