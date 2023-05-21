import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.css']
})
export class DiretivasAtributoComponent implements OnInit{
  estiloDianmico:string = "enable";
  corFundo:string = "lavender";
  corFonte:string = "grey";
  itemNgModel: string = "";
  lista: string[] = [];
  isEnable: boolean = true;

  ngOnInit(): void {
  }

  trocar():void {
    if(this.estiloDianmico === "enable") {
      this.estiloDianmico = "disable";
    } else {
      this.estiloDianmico = "enable";
    }
  }

  adicionarLista() {
    this.lista.push(this.itemNgModel);
  }
}
