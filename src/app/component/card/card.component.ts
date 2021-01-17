import { Component, Input, OnInit } from '@angular/core';
import { Leader } from 'src/app/shared/leader';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('leader') leader: Leader;
   
  constructor() { }

  ngOnInit(): void {
  }

}
