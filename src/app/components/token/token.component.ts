import { Component, OnInit, Input} from '@angular/core';
import { Trc20token } from 'src/app/pages/interfaces/interfaceTRC20';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent implements OnInit {
  @Input() token: Trc20token;
  @Input() indice: number;
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  lanzarMenu() {
  }

  abrirToken() {
    // console.log('Noticia', );
    const browser = this.iab.create(this.token.home_page , '_system');

  }
}
