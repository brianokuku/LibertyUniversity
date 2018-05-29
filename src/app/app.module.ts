import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavouriteSingleComponent } from './favourite-single/favourite-single.component';
import { myRoutes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { DataService } from './Data-service/data.service';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    FavouriteSingleComponent,
    FavouriteListComponent
  ],
  imports: [
    BrowserModule,
    myRoutes,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
