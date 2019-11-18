import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

titulo: string;  // titulo que se encuentra en la pagina 

  constructor(private router: Router, private title:Title, private meta: Meta) { 
    
   this.getDataRouter().subscribe(evento =>{
      console.log(evento);
      this.titulo = evento.titulo;
      this.title.setTitle(this.titulo);

      const metaTag: MetaDefinition ={
        name:'descripcion',
        content: this.titulo
      };

      this.meta.updateTag(metaTag);



    })
  }

  ngOnInit() {
  }

getDataRouter()
{
  return this.router.events
  .pipe( 
    filter(evento => evento instanceof ActivationEnd),
    filter((evento: ActivationEnd) => evento.snapshot.firstChild ===null),
    map( (evento: ActivationEnd) => evento.snapshot.data)
  );
}

}
