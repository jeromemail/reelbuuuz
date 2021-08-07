import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  {

  @Input() header : string | undefined;
  @Input() infoMsg: string | undefined;
  @Input() positions: number | undefined;
  @Input() cast: number | undefined;
  @Input() crew: number | undefined;
  @Input() imgSrc: string |undefined;

//  constructor() { }
//
//  ngOnInit(): void {
//  }

}
