import { Component, OnInit } from '@angular/core';
import { TokensService } from '../../services/tokens.service';
import { Datum } from '../interfaces/interfaces';

@Component({
  selector: 'app-trc10',
  templateUrl: './trc10.page.html',
  styleUrls: ['./trc10.page.scss'],
})
export class Trc10Page implements OnInit {
  trc10Tokens: Datum[] = [];
  constructor( private tokens: TokensService) { }

  ngOnInit() {
    this.cargarTokens();
  }

  loadData( event ) {
    this.cargarTokens(event);
  }

  cargarTokens(event?) {

    this.tokens.getTokenRC10()
    .subscribe(resp => {
      if (resp.data.length === 0) {
        event.target.disbale = true;
        event.target.complete();
        return;
      }
      // console.log(resp.data);
      this.trc10Tokens.push( ...resp.data);
      if (event) {
        event.target.complete();
      }
    });

  }

}
