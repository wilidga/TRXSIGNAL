import { Component, OnInit, Input } from '@angular/core';
import { Datum } from '../../pages/interfaces/interfaces';

@Component({
  selector: 'app-tokens10',
  templateUrl: './tokens10.component.html',
  styleUrls: ['./tokens10.component.scss'],
})
export class Tokens10Component implements OnInit {
  @Input() tokens: Datum[] = [];
  constructor() { }

  ngOnInit() {}

}
