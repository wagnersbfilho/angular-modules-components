import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-check-cicle-sample',
  templateUrl: './check-cicle-sample.component.html',
  styleUrls: ['./check-cicle-sample.component.css']
})
export class CheckCicleSampleComponent
  implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  quantidade: number = 0;

  adicionar() {
    this.quantidade++;
  }
  subtrair() {
    this.quantidade--;
  }

  constructor() {
    console.log("constructor-ckeck");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
