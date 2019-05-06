import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TokensComponent } from './tokens/tokens.component';
import { TokenComponent } from './token/token.component';
import { Token10Component } from './token10/token10.component';
import { Tokens10Component } from './tokens10/tokens10.component';
import { MarketComponent } from './market/market.component';
import { MarketsComponent } from './markets/markets.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    TokensComponent,
    TokenComponent,
    Token10Component,
    Tokens10Component,
    MarketComponent,
    MarketsComponent,
    HeaderComponent
  ],
  exports: [
    TokensComponent,
    Tokens10Component,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
