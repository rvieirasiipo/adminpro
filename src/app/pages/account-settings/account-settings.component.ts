import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document, private _settingsService: SettingsService) { }

  ngOnInit() {
    this.colocaCheck();
  }
      cambiarColor(color:string, link:any)
      {
      
        this.aplicarCheck(link);
        let url = `assets/css/colors/${ color }.css`
        this._document.getElementById('tema').setAttribute('href',url);

        this._settingsService.ajustes.tema = color;
        this._settingsService.ajustes.temaUrl = url;

        this._settingsService.guardarAjustes();

      }

    aplicarCheck( link: any)
    {
      let selectores: any = document.getElementsByClassName('selector');
      for(let ref of selectores)
      {
        ref.classList.remove('working');
      }
      link.classList.add('working');
    }
    colocaCheck()
    {
      let selectores: any = document.getElementsByClassName('selector');
      let tema = this._settingsService.ajustes.tema;
      for(let ref of selectores)
      {
        if(ref.getAttribute('data-theme')===tema)
        {
          ref.classList.add('working');
        }
      }

    }

}
