import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OwnerGenderComponent } from './cats-by-owner-gender/owner-gender/owner-gender.component';

import "rxjs/add/operator/map";
import { PersonService } from '../data/PersonService';
import { CatsByOwnerGenderComponent } from './cats-by-owner-gender/cats-by-owner-gender.component';
import { AppRoutesModule } from './app-routes.module';
import { JsonpModule } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        OwnerGenderComponent,
        CatsByOwnerGenderComponent
    ],
    imports: [
        BrowserModule, 
        AppRoutesModule,
        JsonpModule
    ],
    providers: [PersonService],
    bootstrap: [AppComponent]
})
export class AppModule { }
