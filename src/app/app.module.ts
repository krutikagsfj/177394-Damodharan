import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { GameCityComponent } from './game-city/game-city.component';
import { PlayComponent } from './play/play.component';
import{ ReactiveFormsModule, FormsModule } from'@angular/forms';
import{ HttpClientModule } from'@angular/common/http';
@NgModule({
 declarations: [
  AppComponent,
  GameCityComponent,
  PlayComponent
 ],
 imports: [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }