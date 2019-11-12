import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

progreso: number = 50;

progreso1: number = 20;
progreso2: number = 40;

  constructor() { }

  ngOnInit() {
  }

  actualizar(event:number)
  {
      this.progreso1 = event;
      this.progreso2 = event;
  }

}
