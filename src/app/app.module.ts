import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './films/header.component';

import { FilmsComponent } from './films/film-list';

import { FilmsListComponent } from './films/film-list/films-list.component';
import { FilmsItemComponent } from './films/film-list/films-item.component';

import { FilmsService } from './films/films/service';


import { FilmsDetailComponent } from './films/films-detail/films-detail.component';
import { APP_ROUTES } from './app.routes';
import { EpisodesComponent } from './films/episodes/episodes.component';
import { EpisodesItemComponent } from './films/episodes/episodes-item.component';
import { CompareFilmsComponent } from './compare-films/compare-films.component';
import { CompareFilmsService } from './compare-films/compare-films.service';
import { FilmsStartComponent } from './films/films-start.component';
import { NotFoundComponent } from './films/not-found.component';
import { DropdownDirective } from './films/dropdown.directive';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmsComponent,
    FilmsListComponent,
    FilmsItemComponent,
    FilmsDetailComponent,
    EpisodesComponent,
    EpisodesItemComponent,
    CompareFilmsComponent,
    FilmsStartComponent,
    DropdownDirective,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTES,
    Ng2PageScrollModule.forRoot(),
    new NgbModule()
  ],
  providers: [ 
    FilmsService,
    CompareFilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
