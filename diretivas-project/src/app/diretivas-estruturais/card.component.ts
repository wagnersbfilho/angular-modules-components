import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  isAlive:boolean = true;
  colecao: string[] = ["Linha 1", "Linha 2", "Linha 3", "Linha 4"];
  menuType: string = "";

  mudarBloco(): void {
    this.isAlive = !this.isAlive;
  }

  adicionar():void {
    this.colecao.push("Nova Linha");
  }

  remover(index: number):void {
    if (index == -1) {
      this.colecao.pop();
    } else {
      this.colecao.splice(index, 1);
    }
  }


}
