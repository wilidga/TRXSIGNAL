import { Component, OnInit, ViewChild } from '@angular/core';
import { TokensService } from '../../services/tokens.service';
import { DatumMarket } from '../interfaces/tokensBancor';
import { IonSegment } from '@ionic/angular';
import { Row } from '../interfaces/tokensMarket';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  tokensBancor: DatumMarket[] = [];
  tokensMarket: Row[] = [];
  valorSegmento: any;
  markets: string;


  constructor( private tokensService: TokensService) {
  this.markets = 'BANCOR';
  this.valorSegmento = 'BANCOR';
  }
  ngOnInit() {
     this.tokensBancor = [];
    this.tokensMarket = [];
    this.getMarketBancor();
    this.getMarket();
    // let numero: string;
    // numero = 3210;
    // // numero =  this.pad(27300000, 6);
    //   console.log( numero/ Math.pow(10,6) );
  }



  getMarketBancor() {

    this.tokensService.getMarketBancor()
    .subscribe(resp => {
      // console.log(resp.Data);
      this.tokensBancor.push( ...resp.Data);
    });
  }



  getMarket() {
    this.tokensService.getMarket()
    .subscribe(resp => {
     this.tokensMarket.push( ...resp.data.rows);
      // console.log(resp.data.rows);
    });
  }




  segmentChanged( event ) {
    // this.tokensBancor = [];
    // this.tokensMarket = [];
     this.valorSegmento = event.detail.value;

    // if ( this.valorSegmento === 'MARKET' ) {
    //   // console.log(this.valorSegmento);
    //   this.getMarket();
    // } else {
    //   // console.log(valorSegmento);
    //   this.getMarketBancor();
    // }

  }

  doRefresh( event ) {

    if ( this.valorSegmento === 'MARKET' ) {
      // console.log(this.valorSegmento);
      this.tokensMarket = [];
      this.getMarket();
    } else {
      // console.log(valorSegmento);
      this.tokensBancor = [];
      this.getMarketBancor();
    }

    setTimeout(() => {
     event.target.complete();

    }, 2500 );

  }

}
