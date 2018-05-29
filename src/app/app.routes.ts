import {RouterModule, Routes} from '@angular/router';

import {FavouriteComponent} from './favourite/favourite.component';
import {AppComponent} from './app.component';
import {FavouriteSingleComponent} from './favourite-single/favourite-single.component';
import {FavouriteListComponent} from './favourite-list/favourite-list.component';


const MY_ROUTES: Routes = [

    {path: '', component: FavouriteComponent},
    {path: 'favourites', component: FavouriteListComponent},
    {path: 'profile/:id', component: FavouriteSingleComponent},
    {path: '**', redirectTo: '/' },
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);