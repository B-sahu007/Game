import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharbharComponent } from './charbhar/charbhar.component';
import { GamesComponent } from './games.component';

const routes: Routes = [
  { path: '',
  component:GamesComponent
  },
  {
  path: 'charbhar',
  component: CharbharComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
