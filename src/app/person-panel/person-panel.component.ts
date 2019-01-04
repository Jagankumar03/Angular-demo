import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-panel',
  templateUrl: './person-panel.component.html',
  styleUrls: ['./person-panel.component.css']
})
export class PersonPanelComponent implements OnInit {

  // isAddSelect: any; // without using ngModek
  selectedRow: any;
  constructor() { }

  ngOnInit() {
  }

  onItemSelect(event) {
    this.selectedRow = event;
  }

  // onAddSelect(event: any) {
  //   this.isAddSelect = event;
  //   console.log(this.isAddSelect);
  // }
}
