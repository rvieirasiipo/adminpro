import { Component, OnInit , OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs'
import { retry, map, filter } from 'rxjs/operators' // map funciona para tratar las respuestas.. filter recibe una funcion, cuando se quere apagar o cerrar los resultados 

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

susbcrip: Subscription;  // se genera la 

  constructor() { 
  
// pipe permite definir operadores
this.susbcrip = this.regresaObservable()
/* .pipe(
  retry(2)
)    */
.subscribe(numero =>
  console.log('Subs ', numero), 
  error=>console.error('Error en el Sub', error),
  ()=>console.log('termino')
);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('la pagina se va a cerrar');
    this.susbcrip.unsubscribe();
  }

  regresaObservable():Observable<any>
  {
  return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => 
      {

        contador ++;

        const salida = {
          valor: contador
        };
        
        observer.next(salida);

   /*      if(contador === 3){
          clearInterval(intervalo);
          observer.complete();
        } */
/*         if(contador === 2){
          clearInterval(intervalo);
          observer.error('el manso error');
        } */

      },1000);
    }).pipe(
      map(resp => resp.valor), filter((valor:number, index)=> {
                    if((valor % 2 )===1)
                    {
                      return true;
                    }else{
                      return false;
                    }
      })
    );


  }

}
