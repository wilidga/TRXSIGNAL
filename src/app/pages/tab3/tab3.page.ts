import { Component, OnInit } from '@angular/core';
import { TokensService } from '../../services/tokens.service';
import { Trc20token } from '../interfaces/interfaceTRC20';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
trc20Tokens: Trc20token[] = [];
constructor(private tokens: TokensService) {}

ngOnInit() {
  this.cargarTokens();
}

loadData( event ) {
  this.cargarTokens(event);
}

cargarTokens(event?) {

  this.tokens.getTokenRC20()
  .subscribe(resp => {
    // console.log(resp.trc20_tokens);
    if (resp.trc20_tokens.length === 0) {
      event.target.disbale = true;
      event.target.complete();
      return;
    }
    this.trc20Tokens.push( ...resp.trc20_tokens);
    if (event) {
      event.target.complete();
    }
  });

}



}
