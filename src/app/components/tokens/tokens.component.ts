import { Component, OnInit, Input } from '@angular/core';
import { Trc20token } from 'src/app/pages/interfaces/interfaceTRC20';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent implements OnInit {
@Input() tokens: Trc20token[] = [];
  constructor() { }

  ngOnInit() {}

}
