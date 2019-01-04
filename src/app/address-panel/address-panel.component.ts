import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-panel',
  templateUrl: './address-panel.component.html',
  styleUrls: ['./address-panel.component.css']
})
export class AddressPanelComponent implements OnInit {

  selectedRow: any;
  constructor() { }

  ngOnInit() {
  }

  onItemSelect(event) {
    console.log(event);
    this.selectedRow = event;
  }
}
