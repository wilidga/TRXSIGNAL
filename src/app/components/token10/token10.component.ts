import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Datum } from '../../pages/interfaces/interfaces';

@Component({
  selector: 'app-token10',
  templateUrl: './token10.component.html',
  styleUrls: ['./token10.component.scss'],
})
export class Token10Component implements OnInit {
  @Input() token: Datum;
  @Input() indice: number;
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}
  abrirToken() {
    // console.log('Noticia', );
    const browser = this.iab.create(this.token.url , '_system');

  }
  lanzarMenu() {

  }
}
