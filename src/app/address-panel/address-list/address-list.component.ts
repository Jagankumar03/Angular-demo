import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {JsonService } from '../../json-service';
import { Address } from '../address.model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit, OnDestroy  {

  @Output() rowSelected = new EventEmitter<{}>();
  addressList: any;
  address: Address[];

  constructor(private json: JsonService) { }

  ngOnInit () {
    this.getJsonData();
  }

  ngOnDestroy() {
  }

  getJsonData() {
    this.json.getAddressData()
        .subscribe(data => {
          this.address = <Address[]>data;
          this.rowSelected.emit(this.address[0]);
      });
  }

  destroy(index) {
    this.address.splice(index, 1);
  }

  rowsSelected(person) {
    this.addressList = person;
    this.rowSelected.emit(this.addressList);
  }

  onAddSelect(event) {
    this.rowSelected.emit(event.target.id);
  }
}
