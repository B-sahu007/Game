import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoGame(game:string){
   if(game=='charbhar') {
    this.router.navigateByUrl('games/charbhar', { replaceUrl: true });  
    }
  }
}
