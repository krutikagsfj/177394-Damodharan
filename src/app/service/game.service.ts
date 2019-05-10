// Developer:DAMODHARAN S
// Created Date:6/5/2019
// Modified Date:NIL
// Compoent Name:game.service.ts
import { Injectable } from '@angular/core';
import { Game } from '../model/game';
import { HttpClient } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class GameService {
 constructor(private http:HttpClient) { }
 baseUrl:string='http://localhost:3000/games';
 getGames(){
  return this.http.get<Game[]>(this.baseUrl);
 }}