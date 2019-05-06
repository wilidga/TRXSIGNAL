import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RootObject } from '../pages/interfaces/interfaceTRC20';
import { RootObject10 } from '../pages/interfaces/interfaces';
import { RootObjectMarket } from '../pages/interfaces/tokensBancor';
import { RootObjectMMarket } from '../pages/interfaces/tokensMarket';

@Injectable({
  providedIn: 'root'
})
export class TokensService {
  limit = 0;
  start = 0;

  limit20 = 0;
  start20 = 0;
  constructor(private http: HttpClient) { }

getTokenRC20() {
  this.start20 = this.limit20;
  this.limit20 = this.limit20 + 20;
// tslint:disable-next-line:max-line-length
 return this.http.get<RootObject>(`https://apilist.tronscan.org/api/token_trc20?sort=issue_time&limit=${this.limit20}&start=${this.start20}`);


}
getTokenRC10() {
  this.start = this.limit;
  this.limit = this.limit + 20;
  // tslint:disable-next-line:max-line-length
  return this.http.get<RootObject10>(`https://apilist.tronscan.org/api/token?sort=-name&limit=${this.limit}&start=${this.start}&totalAll=1`);
 }
 getMarketBancor() {
  return this.http.get<RootObjectMarket>(`https://apilist.tronscan.org/api/exchanges/list?sort=-balance`);
 }
 getMarket() {
  return this.http.get<RootObjectMMarket>(`https://api.trx.market/api/exchange/marketPair/list`);
 }

}
