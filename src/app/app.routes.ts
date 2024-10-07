import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { ProductsComponent } from './components/products/products.component';
import { ClubComponent } from './components/club/club.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: 'home', title: 'НХНЛ база - Головна', component: HomeComponent },
    { path: 'team', title: 'НХНЛ база - Команда', component: TeamComponent },
    { path: 'products', title: 'НХНЛ база - Продукти', component: ProductsComponent },
    { path: 'club', title: 'НХНЛ база - Клуб', component: ClubComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', title: 'НХНЛ база - Сторінка не знайдена', component: NotfoundComponent },
];
