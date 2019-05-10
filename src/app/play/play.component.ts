// Developer:DAMODHARAN S
// Created Date:6/5/2019
// Modified Date:NIL
// Compoent Name:play.component.ts
import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { Router } from '@angular/router';
import { GameService } from '../service/game.service';
@Component({
 selector: 'app-play',
 templateUrl: './play.component.html',
 styleUrls: ['./play.component.css']
})
// export the play com
export class PlayComponent implements OnInit {
 games :Game[];
 amount:any;
 constructor(private router: Router , private gameService:GameService) { }
 ngOnInit() {
  this.gameService.getGames().subscribe(data=>{this.games=data});
  let ammt=localStorage.getItem("amt");
  this.amount=ammt.toString();
  this.amount=this.amount-100;
  console.log(this.amount);
 }
}