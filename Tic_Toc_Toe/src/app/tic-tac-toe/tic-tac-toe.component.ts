import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink, RouterModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
  gameBoxes: string[] = Array(9).fill("");
  turn0: boolean = true;
  showWinner: boolean = false;
  winnerMessage: string = "";

  winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  makeMove(index: number): void {
    if (!this.gameBoxes[index]) {
      this.gameBoxes[index] = this.turn0 ? 'O' : 'X';
      this.turn0 = !this.turn0;
      this.checkWinner();
    }
  }

  checkWinner(): void {
    for (const pattern of this.winPatterns) {
      const [a, b, c] = pattern;
      if (this.gameBoxes[a] && this.gameBoxes[a] === this.gameBoxes[b] && this.gameBoxes[a] === this.gameBoxes[c]) {
        this.showWinner = true;
        this.winnerMessage = `Congratulations, Winner is ${this.gameBoxes[a]}`;
        this.disableBoxes();
        break;
      }
    }
  }

  disableBoxes(): void {
    this.gameBoxes = this.gameBoxes.map(box => box ? box : "-");
  }

  resetGame(): void {
    this.gameBoxes = Array(9).fill("");
    this.turn0 = true;
    this.showWinner = false;
    this.winnerMessage = "";
  }
}