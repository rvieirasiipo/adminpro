import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


@ViewChild('txtProgress', { static: true }) txtProgress: ElementRef;

@Input() progreso: number = 50;
@Input('nombre') leyenda: string = 'ley';
@Output('actualiza') cambioValor: EventEmitter<number> = new EventEmitter();  //eventeEmiter es de angule Core


  constructor() {}

  ngOnInit() {}

cambiarValor(val:number)
{

  if(this.progreso >= 100 && val > 0)
  {
    return;
  }
  if(this.progreso <= 0 && val < 0)
  {
    return;
  }
  
  this.progreso = this.progreso + val;

  this.cambioValor.emit(this.progreso );
}

onChanges(val:number)
{
  console.log(event);
  if(val >= 100)
  {
    this.progreso = 100;
  }
  else if(val <= 0)
  {
    this.progreso = 0;
  }

  //let elemHtml: any = document.getElementsByName('progreso')[0];
  //elemHtml.value = this.progreso;8

  this.txtProgress.nativeElement.value = this.progreso;

  this.cambioValor.emit(this.progreso );
}

}
