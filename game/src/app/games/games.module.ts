import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { CharbharComponent } from './charbhar/charbhar.component';
import { GamesComponent } from './games.component';
import {CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
@NgModule({
  declarations: [
    CharbharComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class GamesModule { }
