import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{
  nome: string = "title-component";
  @Input() change:string = "";

  constructor() {
    console.log("constructor-title");
  }

  ngOnInit(): void {
    console.log(`on-init-component: ${this.nome}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`on-changes`);
    this.nome = this.change;
  }
}
