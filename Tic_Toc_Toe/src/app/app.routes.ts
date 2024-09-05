import { Routes } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

export const routes: Routes = [
{path:'', redirectTo:'game', pathMatch:'full'},

{path:'game', component: TicTacToeComponent}
];
